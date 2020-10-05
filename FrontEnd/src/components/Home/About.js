import React, { Component } from 'react'
import Layout from './Layout'

class About extends Component {
  render() {
    var id = "";
    var username = "";

    if (this.props.location.state) {
      id = this.props.location.state.id;
      username = this.props.location.state.username;
    }

    return (
      <Layout id={id} username={username}>
        <div>
          About Page
        </div>
      </Layout>
      
    )
  }
}
export default About;
