import * as React from 'react';
import { observer } from 'mobx-react';

export interface AppProps {
    user : any
}

@observer
export default class UserViewEditor extends React.Component<AppProps, any> {

    onNameChange = (event : any)=>{
        this.props.user.changeName(event.target.value);
    }
  
    onEmailChange = (event: any)=>{
        this.props.user.changeEmail(event.target.value);
    }

  render() {
    return (
      <div>
      name : <input value={this.props.user.name} onChange={this.onNameChange}/>
      <br/>
      email : <input value={this.props.user.email} onChange={this.onEmailChange}/>     
      </div>
    );
  }

}
