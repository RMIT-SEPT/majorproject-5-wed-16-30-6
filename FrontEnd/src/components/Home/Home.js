import React, { Component } from 'react'
import { connect } from "react-redux";
import BusinessOption from './BusinessOption'
import "./Home.css";
import Layout from './Layout';
import Greeting from '../Persons/Greeting';

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
    var { custId, name } = "";
    if (this.props.login) {
      custId = this.props.customer.id;
      name = this.props.customer.name;
    }

    console.log(this.props.customer);
    
    return (
      <Layout id={custId} login={this.props.login}>
        <Greeting name={name}/>
        <div className="home">
          {this.getBusinessOptions()}
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  const currentState = state.customerReducer[state.customerReducer.length - 1];
  
  return {
    login: currentState.login,
    customer: currentState.customer,
  }
}

export default connect(mapStateToProps, null)(Home);

