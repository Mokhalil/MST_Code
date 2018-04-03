import { onSnapshot } from 'mobx-state-tree';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import './index.css';
import { Provider } from "mobx-react";
import { UserStore } from "./models/UserStore";
import { ViewStore } from "./stores/ViewStore";

let  initial_State: any = { users: [], isLoading: false };

if (localStorage.getItem("Users")) {
  initial_State = JSON.parse(localStorage.getItem("Users") as string);
}

const userStore = UserStore.create(initial_State);
(window as any).data = userStore;


onSnapshot(userStore, snapShot=>{
  localStorage.setItem("Users", JSON.stringify(snapShot))
})

const viewStore = new ViewStore();
viewStore.showActiveUsers();

ReactDOM.render(
  <Provider store={userStore} viewStore={viewStore}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
