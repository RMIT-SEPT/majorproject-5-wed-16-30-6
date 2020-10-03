import React, { Component } from 'react';
import "./bookingForm.css"
// import ScheduleCell from "./BusinessSchedule/ScheduleCell";

class bookingForm extends Component {

    constructor(props) {
        super(props);
        this.state={
            fields:{
                Name:"",
                emailAddress:"",
                phoneNumber:""
            },
            errors: {}
        };
    }

    handleValidation() {
        let fields=this.state.fields;
        let errors={};
        let formIsValid=true;

        //Name
        if(!fields["Name"]) {
            formIsValid=false;
            errors["Name"]="Name is Empty";
        }
        if(typeof fields["Name"]!=="undefined") {
            if(!fields["Name"].match(/^[a-zA-Z]+$/)) {
                formIsValid=false;
                errors["Name"]="Please Enter Letters Only";
            }
        }

        //Email Address
        if(!fields["emailAddress"]) {
            formIsValid=false;
            errors["emailAddress"]="Email Address is Empty";
        }
        if(typeof fields["emailAddress"]!=="undefined") {
            let lastAtPos=fields["emailAddress"].lastIndexOf('@');
            let lastDotComPos=fields["emailAddress"].lastIndexOf('.com');

            if(!(lastAtPos<lastDotComPos && lastAtPos>0 && fields["emailAddress"].indexOf('@@')===-1 && lastDotComPos>2 && (fields["emailAddress"].length-lastDotComPos)>2)) {
                formIsValid=false;
                errors["emailAddress"]="Email is Invalid";
            }
        }

        //Phone Number
        if(!fields["phoneNumber"]) {
            formIsValid=false;
            errors["phoneNumber"]="Phone Number is Empty";
        }
        if(typeof fields["phoneNumber"]!=="undefined") {
            if(!fields["phoneNumber"].match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) {
                formIsValid=false;
                errors["phoneNumber"]="Invalid Phone Number"
            }
        }
        this.setState({
            errors: errors
        });
        return formIsValid;
    }

    handleChange(field,e) {
        let fields=this.state.fields;
        fields[field]=e.target.value;
        this.setState({
            fields
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        if(this.handleValidation()) {
            alert("Form submitted!");
        } else {
            alert("Invalid Form, Unable to Submit!");
        }
    }

    getAppointmentMsg() {
        return (
            "You are making appointment for business " 
            + this.props.location.state.businessId + " at " 
            + this.props.location.state.startTime + " to "
            + this.props.location.state.endTime + " on " 
            + this.props.location.state.date + "."
        );
    }

    render(){
        return(
            <div class="container">
            <form onSubmit={this.handleSubmit.bind(this)}>
                <h1>Booking Form</h1>
                <h5>{this.getAppointmentMsg()}</h5>

                    <label>Enter your Name:
                    <input
                        type="text"
                        name="Name"
                        placeholder="Name"
                        value={this.state.fields.Name}
                        onChange={this.handleChange.bind(this,"Name")}
                    />
                    </label>
                    <span style={{color:"red"}}>{this.state.errors["Name"]}</span>
                    <br />
                    <label>Enter your email address:
                    <input
                        type="text"
                        name="emailAddress"
                        placeholder="Email Address"
                        value={this.state.fields.emailAddress}
                        onChange={this.handleChange.bind(this,"emailAddress")}
                    />
                    </label>
                <span style={{color:"red"}}>{this.state.errors["emailAddress"]}</span>
                    <br />
                    <label>Enter your phone number:
                    <input
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={this.state.fields.phoneNumber}
                        onChange={this.handleChange.bind(this,"phoneNumber")}
                    />
                    </label>
                    <span style={{color:"red"}}>{this.state.errors["phoneNumber"]}</span>
                    <br />
                    <input type="submit" value="Book Appointment" />
                    <input 
                        type="button" 
                        value="Cancel" 
                        onClick={() => this.props.history.push("business/schedule/" + this.props.location.state.businessId)}
                    />
            </form>
            </div>
        )
    }
}

export default (bookingForm);

