import React, { Component } from 'react'
import LinkButton from './LinkButton';

class Login extends Component {
  render() {
    return (
      <div className="login">
       
        {/* TODO : This is only for test */}
        <h1><LinkButton link="/admin/1" label="Click to Login" className="login-test" /></h1>
        
      </div>
    )
  }
}

export default Login;
