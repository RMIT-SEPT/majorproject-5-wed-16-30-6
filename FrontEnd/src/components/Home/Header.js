import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./Home.css"
import LinkButton from './LinkButton';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="left-nav">
          <LinkButton link="/home" label="Home" className="home" />
        </div>
        <div className="right-nav">
          <LinkButton link="/about" label="About" className="about" />
          <LinkButton link="/login" label="Login" className="login" />
          <LinkButton link="/signup" label="Sign Up" className="signup" />
          <LinkButton link="/contactus" label="Contact Us" className="contact" />
        </div>
      </div>
    )
  }
}
export default Header;