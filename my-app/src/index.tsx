import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {Provider} from 'mobx-react'
import { UserStore } from './models/UserStore';
import {ViewStore} from './stores/ViewStore';


const userStore = UserStore.create({users: [], isLoading: false});
const viewStore = new ViewStore();
viewStore.showActiveUsers();
ReactDOM.render(
  <Provider store={userStore} viewStore={viewStore}>
  <App /></Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
