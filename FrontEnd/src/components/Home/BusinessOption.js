import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * Displayed as links to each businesses schedule on Home page
 */
export class BusinessOption extends Component {
  render() {
    let link = "/business/" + this.props.businessId + "/schedule";

    return (
      <div 
        className="business-option"
        onClick={
          () => this.props.history.push({
            pathname: link,
            state: {
              businessId: this.props.businessId
            }
          })
        }
      >
        <div className="business-name">Business Name</div>
        <div className="business-desc">Business Description</div>
      </div>
    )
  }
}

BusinessOption.propType = {
  businessId: PropTypes.number.isRequired
}

export default withRouter(BusinessOption);
