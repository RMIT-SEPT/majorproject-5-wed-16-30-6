import React, { Component } from 'react'
import BusinessOption from './BusinessOption'
import "./Home.css";

class Home extends Component {

  getBusinessOptions() {
    const businessesCount = 12;
    var businessOptions = []

    for (var i = 1; i <= businessesCount; i++) {
      businessOptions.push(
        <div><BusinessOption businessId={i}/></div>
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
