import React, { Component } from 'react'
import { withRouter } from 'react-router';

class BusinessOption extends Component {
  render() {
    let id = this.props.businessId;
    let link = "/business/schedule/" + id;

    return (
      <div 
      className="business-option"
      onClick={() => this.props.history.push(link)}
      >
        <div>Business Name</div>
        <div>Business Description</div>
      </div>
    )
  }
}

export default withRouter(BusinessOption);
