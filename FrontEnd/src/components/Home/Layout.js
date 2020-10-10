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
    var {userId, login, role, link} = "";
    if (this.props.login) {
      userId = this.props.person.id;
      login = this.props.login;
      role = this.props.person.role;
      link = "/home";

      // redirect to different dashboard depending on the role
      switch(role) {
        case 'c':
          link = "/user/" + userId;
          break;
        case 'w':
          link = "/worker/" + userId;
          break;
        case 'a':
          link = "/admin/" + userId;
          break;
        default:
          link = "/user/" + userId;
          break;
      }
    }

    return (
      <div>
        <div className="header">
          <div className="left-nav">
            <LinkButton link="/home" label="Home" className="home-link"/>
          </div>

          {login &&
            <div className="right-nav">
              <LinkButton link={link} label="Dashboard" className="myprofile-link" />
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
  const currentState = state.loginReducer[state.loginReducer.length - 1];
  
  return {
    login: currentState.login,
    person: currentState.person,
  }
}

export default withRouter((connect(mapStateToProps, null)(Layout)));
