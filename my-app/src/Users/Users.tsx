import * as React from "react";
import { observer, inject } from "mobx-react";
import UsersListView from "./UsersListView";

@inject("store") @observer
export default class Users extends React.Component<any, any> {
  componentDidMount() {
    this.props.store.loadUsers();
  }
  render() {
    return (
      <div>
        <UsersListView />
      </div>
    );
  }
}
