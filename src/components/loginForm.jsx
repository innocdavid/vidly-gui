import React, { Component } from 'react';
import Input from './common/input';

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" }
  }
  hanldleSubmit = e => {
    e.preventDefault();
  }

  handleChange = ({ currentTarget: input}) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  }

  render() {
    const { account } = this.state;
    return (
      
        <div className="login-dev">
          <h2>Login</h2>
          <form onSubmit={this.hanldleSubmit}>
            <Input 
              name="username"
              textType="text"
              value={account.username}
              label="Username"
              onChange={this.handleChange}
            />
            <Input 
              name="password"
              textType="password"
              value={account.password}
              label="Password"
              onChange={this.handleChange}
            />

            
            <div className="d-flex justify-content-center mt-3">
              <button className="btn btn-primary">Login</button>
            </div>
               
          </form>
        </div>
    
    );
  };
}

export default LoginForm;