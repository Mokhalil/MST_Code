import * as React from "react";
import { observer } from "mobx-react";
import UserViewEditor from "./UserViewEditor";
import { INITIAL_STATE_USER } from "../models/constants";

export interface UserEntryProps {
  users: any;
}

@observer
export default class UserEntry extends React.Component<UserEntryProps, any> {
  
    constructor(props: UserEntryProps) {
    super(props);
    this.state = {entry: INITIAL_STATE_USER}
    }
  
  onSave = () => {
    this.props.users.add(this.state.entry);
    this.setState({});  
  };

  render() {
    return (
      <div>
        <UserViewEditor user={this.state.entry} />
        <button onClick={this.onSave}>Add</button>
      </div>
    );
  }
}
