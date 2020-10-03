import React, { Component } from 'react'
import BusinessOption from './BusinessOption'
import "./Home.css";
import Layout from './Layout';

/**
 * Displayed as the main part of Home page with links to each business
 */
class Home extends Component {
  
  getBusinessOptions() {
    const businessesCount = 12;
    var businessOptions = []

    for (var i = 1; i <= businessesCount; i++) {
      businessOptions.push(
        <div key={i}><BusinessOption businessId={i}/></div>
      )
    }

    return businessOptions;
  }

  render() {
    var {username, id} = "";
    
    if (this.props.location.state) {
      username = this.props.location.state.username;
      id = this.props.location.state.id;
    }
    
    return (
      <Layout id={id} username={username}>
        <div className="greet-user-box">
          <div>Hello {username}!</div>
        </div>

        <div className="home">
          {this.getBusinessOptions()}
        </div>
      </Layout>
    )
  }
}

export default Home;
