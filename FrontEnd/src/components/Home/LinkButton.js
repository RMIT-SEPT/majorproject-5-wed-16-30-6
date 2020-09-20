import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

/**
 * create a clickable lik to the given url (link) with given label and className
 */
export class LinkButton extends Component {
  render() {
    return (
      <div 
      onClick={() => this.props.history.push(this.props.link)}
      className={this.props.className}
      >
        <span>{this.props.label}</span>
      </div>
    )
  }
}

LinkButton.propType = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

export default withRouter(LinkButton);
