import React, { Component } from 'react'
import { withRouter } from 'react-router';

class LinkButton extends Component {
  render() {
    return (
      <div 
      onClick={() => this.props.history.push(this.props.link)}
      className={this.props.className}
      >
        {this.props.label}
      </div>
    )
  }
}

export default withRouter(LinkButton);
