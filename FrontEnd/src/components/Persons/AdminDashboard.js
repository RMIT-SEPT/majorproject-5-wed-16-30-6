import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./Dashboard.css"
import AddWorker from '../Admin/AddWorker';
import EditWorker from '../Admin/EditWorker';


class AdminDashboard extends Component {
  constructor() {
    super();
    this.state = {
      selected: "Booking Summary"
    }

    this.options = [
      "Register Worker", "Edit Worker", "Add/Edit Shift", "Booking Summary", "New Bookings", "View Availability"
    ];
  }

  selectRegisterWorker = () => {
    this.setState({ selected: this.options[0] });
  };

  selectEditWorker = () => {
    this.setState({ selected: this.options[1] });
  };

  getSelectedComponent() {
    switch(this.state.selected) {
      case this.options[0]:
        return <AddWorker />
      case this.options[1]:
        return <EditWorker />
      case this.options[3]:
        return <div>{this.options[3]}</div>
      default:
        return;
    }
  }

  render() {
    // const { params } = this.props.match;
    // const id = parseInt(params.id);

    return (
      <div className="dashboard">
        <div className="dashboard-column">
          <div className="opt" onClick={this.selectRegisterWorker} >
            Register Worker
          </div>
          <div className="opt" onClick={this.selectEditWorker} >
            Edit Worker
          </div>
          <div className="opt">
            Add/Edit Shift
          </div>
          <div className="opt">
            Booking Summary
          </div>
          <div className="opt">
            New Bookings
          </div>
          <div className="opt">
            View Availability
          </div>
        </div>

        <div className="dashboard-right-column">
          {this.getSelectedComponent()}
        </div>
      </div>
    )
  }
}
export default AdminDashboard;