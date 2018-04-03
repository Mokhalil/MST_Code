import * as React from "react";
import { observer, inject } from "mobx-react";
import UsersListView from "./UsersListView";
import UserEntry from "./UserEntry";
import './Users.css';

@inject("store")
@observer
export default class Users extends React.Component<any, any> {
  componentDidMount() {
    //if (this.props.store.users.length == 0) this.props.store.loadUsers();
  }
  render() {
    return (
      <div>
      <div className="container"><UsersListView /></div>        
        <div><UserEntry users={this.props.store} /></div>
      </div>
    );
  }
}
