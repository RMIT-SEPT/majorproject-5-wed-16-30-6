import React, { Component } from 'react'
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css"
import "./Header.css"
import LinkButton from './LinkButton';
import { withRouter } from 'react-router-dom';

/**
 * Layout contains header with navigation links
 */
export class Layout extends Component {
  render() {
    var {userId, login, link} = "";
    if (this.props.login) {
      userId = this.props.customer.id;
      login = this.props.login;
      link = "/user/" + userId + "/profile";
    }

    console.log(this.props.customer);

    return (
      <div>
        <div className="header">
          <div className="left-nav">
            <LinkButton link="/home" label="Home" className="home-link"/>
          </div>

          {login &&
            <div className="right-nav">
              <LinkButton link={link} label="My Profile" className="myprofile-link" />
              <LinkButton link="/about" label="About" className="about-link" />
              <LinkButton link="/contactus" label="Contact Us" className="contact-link" />
            </div>
          }

          {!login &&
            <div className="right-nav">
              <LinkButton link="/about" label="About" className="about-link" />
              <LinkButton link="/contactus" label="Contact Us" className="contact-link" />
              <LinkButton link="/login" label="Login" className="login-link" />
              <LinkButton link="/signup" label="Sign Up" className="signup-link" />
            </div>
          }

        </div>
        {this.props.children}
      </div>
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

export default withRouter((connect(mapStateToProps, null)(Layout)));
