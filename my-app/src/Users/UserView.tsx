import * as React from "react";
import UserViewEditor from "./UserViewEditor";
import { observer } from "mobx-react";
import { clone, getSnapshot, applySnapshot } from "mobx-state-tree";
import { Card } from "antd";
export interface UserViewProps {
  user: any;
}

@observer
export default class UserView extends React.Component<UserViewProps, any> {
  constructor(props: UserViewProps) {
    super(props);
    this.state = { isEditing: false };
  }

  onToggleEdit = (event: any) => {
    this.setState({ isEditing: true, clone: clone(this.props.user) });
  };

  render() {
    return this.state.isEditing
      ? this.renderEdititable()
      : this.renderReadOnly();
  }

  onCancelEdit = () => {
    this.setState({
      isEditing: false,
      clone: null
    });
  };

  onSaveEdit = () => {
    applySnapshot(this.props.user, getSnapshot(this.state.clone));
    this.setState({
      isEditing: false,
      clone: null
    });
  };

  onRemoveItem = () => {
    this.props.user.remove();
  };

  renderReadOnly() {
    return (
      <Card
        bordered={true}
        hoverable={true}
        title={this.props.user.name}
        actions={["Add", "Deletes"]}
        style={{ width: 300, marginLeft:10 }}
      >
        <div>
          <div>{this.props.user.id}</div>
          <div>{this.props.user.name}</div>
          <span>
            <button onClick={this.onToggleEdit}>Edit</button>
            <button onClick={this.onRemoveItem}>Delete</button>
          </span>
        </div>
      </Card>
    );
  }
  renderEdititable() {
    return (
      <div>
        <UserViewEditor user={this.state.clone} />
        <button onClick={this.onSaveEdit}>Save</button>
        <button onClick={this.onCancelEdit}>Cancel</button>
      </div>
    );
  }
}
