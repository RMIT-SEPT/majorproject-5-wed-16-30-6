import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./Header.css"
import LinkButton from './LinkButton';

/**
 * Header with navigation links
 */
export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="left-nav">
          <LinkButton link="/home" label="Home" className="home-link" />
        </div>
        <div className="right-nav">
          <LinkButton link="/about" label="About" className="about-link" />
          <LinkButton link="/login" label="Login" className="login-link" />
          <LinkButton link="/signup" label="Sign Up" className="signup-link" />
          <LinkButton link="/contactus" label="Contact Us" className="contact-link" />
        </div>
      </div>
    )
  }
}
export default Header;