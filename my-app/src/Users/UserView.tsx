import * as React from "react";
import UserViewEditor from "./UserViewEditor";
import { observer } from "mobx-react";
import {clone, getSnapshot, applySnapshot} from 'mobx-state-tree';

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
    this.setState({ isEditing: true });
  };

  render() {
    const { user } = this.props;
    return (
      <div>
        <div>{user.id}</div>
        <div>{user.name}</div>
        <span>
          <button onClick={this.onToggleEdit}>Edit</button>
        </span>
      </div>
    );
  }


  onCancelEdit = () =>{
      this.setState({isEditing : false,
    clone:clone(this.props.user)})
  }

  onSaveEdit = () =>{
      applySnapshot(this.props.user, getSnapshot(this.state.clone));
      this.setState({
          isEditing : false,
          clone : null
      })

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
