import React, { Component } from 'react'
import { connect } from "react-redux";

import { logoutSuccess } from '../../actions/loginActions';

class Logout extends Component {
  componentDidMount() {
    this.props.dispatch(logoutSuccess());
    this.props.history.push('/home');
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

export default connect(null, null)(Logout);
