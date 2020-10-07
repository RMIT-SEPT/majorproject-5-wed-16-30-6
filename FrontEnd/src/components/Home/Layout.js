import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./Header.css"
import LinkButton from './LinkButton';
import { withRouter } from 'react-router-dom';


/**
 * Layout contains header with navigation links
 */
export class Layout extends Component {

  getLinks() {
    let links = [];

    // if user is logged in
    if (this.props.id) {
      // user id sent from previous page
      const userId = this.props.id;
      const username = this.props.username;
      const link = "/user/" + userId + "/profile"

      links.push(
        <LinkButton key="1" link={link} label="My Profile" className="myprofile-link" id={userId} username={username}/>
      );

      links.push(
        <LinkButton key="2" link="/about" label="About" className="about-link" id={userId} username={username}/>
      );

      links.push(
        <LinkButton key="3" link="/contactus" label="Contact Us" className="contact-link" id={userId} username={username}/>
      )  
    }
    else {
      // if not logged in
      links.push(
        <LinkButton key="2" link="/about" label="About" className="about-link" />
      );

      links.push(
        <LinkButton key="3" link="/contactus" label="Contact Us" className="contact-link" />
      )  

      links.push(
        <LinkButton key="4" link="/login" label="Login" className="login-link" />
      );

      links.push(
        <LinkButton key="5" link="/signup" label="Sign Up" className="signup-link" />
      )
    }

    return links;
  }

  render() {
    var userId = "";
    var username = "";

    if (this.props.id) {
      userId = this.props.id;
      username = this.props.username;
    }

    return (
      <div>
        <div className="header">
          <div className="left-nav">
            <LinkButton link="/home" label="Home" className="home-link" id={userId} username={username}/>
          </div>
          <div className="right-nav">
            {this.getLinks()}
          </div>
        </div>
        {this.props.children}
      </div>
    )
  }
}
export default withRouter(Layout);