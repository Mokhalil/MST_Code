import * as React from 'react';
import './App.css';
import { observer, inject } from 'mobx-react';
import Users from './Users/Users';

const logo = require('./logo.svg');

@inject("store","viewStore")
@observer
class App extends React.Component<any,any> {
  render() {
      return (
      <div className="App">
        <header className="App-header">
        {
          this.props.store.users.length
        }
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Users/>
      </div>
    );
  }
}

export default App;
