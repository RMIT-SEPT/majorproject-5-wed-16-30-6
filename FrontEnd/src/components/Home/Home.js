import React, { Component } from 'react'
import { connect } from "react-redux";
import BusinessOption from './BusinessOption'
import "./Home.css";
import Layout from './Layout';
import Greeting from '../Persons/Greeting';
import { withRouter } from 'react-router-dom';

/**
 * Displayed as the main part of Home page with links to each business
 */
class Home extends Component {
  
  getBusinessOptions() {
    const businessesCount = 12;
    var businessOptions = []

    for (var i = 1; i <= businessesCount; i++) {
      businessOptions.push(
        <div key={i}>
          <BusinessOption businessId={i} />
        </div>
      )
    }

    return businessOptions;
  }

  render() {
    var name = "";
    if (this.props.login) {
      name = this.props.person.name;
    }
    
    return (
      <Layout>
        <Greeting name={name}/>
        <div className="home">
          {this.getBusinessOptions()}
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  const currentState = state.loginReducer[state.loginReducer.length - 1];
  
  return {
    login: currentState.login,
    person: currentState.person,
  }
}

export default withRouter(connect(mapStateToProps, null)(Home));

