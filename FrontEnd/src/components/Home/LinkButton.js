import React, { Component } from 'react'
import { withRouter } from 'react-router';

class LinkButton extends Component {
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

export default withRouter(LinkButton);
