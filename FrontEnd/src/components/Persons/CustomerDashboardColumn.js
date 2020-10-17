import React, { Component } from 'react'
import { withRouter } from 'react-router';

class CustomerDashboardColumn extends Component {

  render() {
    const id = this.props.id;
    const historyPath = "/user/" + id + "/booking_history";
    const cancelPath = "/user/" + id + "/cancel_booking";
    const profilePath = "/user/" + id + "/profile";
    const editProfilePath = "/user/" + id + "/edit/profile";

    return (
      <div className="dashboard-column">
        <div
          className="opt"
          onClick={
            () => this.props.history.push("/home")
          }
        >
          Home
        </div>
        <div
          className="opt"
          onClick={
            () => this.props.history.push({
              pathname: historyPath,
              state: {
                selected: "booking_history"
              }
            })
          }
        >
          Booking History
    </div>

        <div
          className="opt"
          onClick={
            () => this.props.history.push({
              pathname: cancelPath,
              state: {
                selected: "cancel_booking"
              }
            })
          }
        >
          Cancel Booking
        </div>
        <div
          className="opt"
          onClick={
            () => this.props.history.push({
              pathname: profilePath,
              state: {
                selected: "profile"
              }
            })
          }
        >
          View Profile
        </div>

        <div
          className="opt"
          onClick={
            () => this.props.history.push({
              pathname: editProfilePath,
              state: {
                selected: "edit_profile"
              }
            })
          }
        >
          Edit Profile
        </div>
      </div>
    )
  }
}

export default withRouter(CustomerDashboardColumn);
