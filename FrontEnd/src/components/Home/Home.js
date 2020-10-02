import React, { Component } from 'react'
import BusinessOption from './BusinessOption'
import "./Home.css";

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
    return (
      <div className="home">
        {this.getBusinessOptions()}
      </div>
    )
  }
}

export default Home;
