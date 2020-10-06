import React, { Component } from 'react';
import { connect } from "react-redux";
import "./bookingForm.css"
import LoginSignupPrompt from './LoginSignupPrompt';
// import ScheduleCell from "./BusinessSchedule/ScheduleCell";

class bookingForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fields: {
        Name: "",
        emailAddress: "",
        phoneNumber: ""
      },
      errors: {}
    };
  }

  // handleValidation() {
  //   let fields = this.state.fields;
  //   let errors = {};
  //   let formIsValid = true;

  //   //Name
  //   if (!fields["Name"]) {
  //     formIsValid = false;
  //     errors["Name"] = "Name is Empty";
  //   }
  //   if (typeof fields["Name"] !== "undefined") {
  //     if (!fields["Name"].match(/^[a-zA-Z]+$/)) {
  //       formIsValid = false;
  //       errors["Name"] = "Please Enter Letters Only";
  //     }
  //   }

  //   //Email Address
  //   if (!fields["emailAddress"]) {
  //     formIsValid = false;
  //     errors["emailAddress"] = "Email Address is Empty";
  //   }
  //   if (typeof fields["emailAddress"] !== "undefined") {
  //     let lastAtPos = fields["emailAddress"].lastIndexOf('@');
  //     let lastDotComPos = fields["emailAddress"].lastIndexOf('.com');

  //     if (!(lastAtPos < lastDotComPos && lastAtPos > 0 && fields["emailAddress"].indexOf('@@') === -1 && lastDotComPos > 2 && (fields["emailAddress"].length - lastDotComPos) > 2)) {
  //       formIsValid = false;
  //       errors["emailAddress"] = "Email is Invalid";
  //     }
  //   }

  //   //Phone Number
  //   if (!fields["phoneNumber"]) {
  //     formIsValid = false;
  //     errors["phoneNumber"] = "Phone Number is Empty";
  //   }
  //   if (typeof fields["phoneNumber"] !== "undefined") {
  //     if (!fields["phoneNumber"].match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) {
  //       formIsValid = false;
  //       errors["phoneNumber"] = "Invalid Phone Number"
  //     }
  //   }
  //   this.setState({
  //     errors: errors
  //   });
  //   return formIsValid;
  // }

  // handleChange(field, e) {
  //   let fields = this.state.fields;
  //   fields[field] = e.target.value;
  //   this.setState({
  //     fields
  //   });
  // }

  handleSubmit(e) {
    e.preventDefault();

    if (this.handleValidation()) {
      alert("Form submitted!");
    } else {
      alert("Invalid Form, Unable to Submit!");
    }
  }

  getAppointmentMsg() {
    return (
      "This is booking form for business "
      + this.props.location.state.businessId + " at "
      + this.props.location.state.startTime + " to "
      + this.props.location.state.endTime + " on "
      + this.props.location.state.date + "."
    );
  }

  render() {
    const login = this.props.login;
    // console.log(this.props.login);
    // login = true;

    return (
      <div className="container">
        <h1>Booking Form</h1>
        <h5>{this.getAppointmentMsg()}</h5>

        {!login && <LoginSignupPrompt />}

        {login &&
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="submit" value="Book Appointment" />
            <input
              type="button"
              value="Cancel"
              onClick={() => this.props.history.push("business/schedule/" + this.props.location.state.businessId)}
            />
          </form>
        }
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

export default connect(mapStateToProps, null)(bookingForm);
