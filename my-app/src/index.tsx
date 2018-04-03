import {onSnapshot} from 'mobx-state-tree';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {Provider} from 'mobx-react';
import {UserStore} from './models/UserStore';
import {ViewStore} from './stores/ViewStore';


//Initialize the application
let  initial_State: any = { users: [], isLoading: false };

if (localStorage.getItem("Users")) {
  initial_State = JSON.parse(localStorage.getItem("Users") as string);
}

//Initalize the Users from Local Storage stored there
const userStore = UserStore.create(initial_State);
(window as any).data = userStore;


// Store Snapshot in local Storage when the tree has been updated
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
