import React, { Component } from 'react'
import LinkButton from './LinkButton';
import Layout from './Layout';

class Login extends Component {
  render() {
    return (
      <Layout>
        <div className="login">
        
          {/* TODO : This is only for test */}
          <h1><LinkButton link="/admin/1" label="Click to Login" className="login-test" /></h1>
          
        </div>
      </Layout>
    )
  }
}

export default Login;
