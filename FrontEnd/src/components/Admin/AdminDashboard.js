import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./Admin.css"
import LinkButton from '../Home/LinkButton'
import AddWorker from './AddWorker'

class AdminDashboard extends Component {
  render() {
    // const { params } = this.props.match;
    // const id = parseInt(params.id);

    return (
      <div className="dashboard">
        <div className="dashboard-left-column">
          <div className="admin-opt-title">Admin Options</div>
          <LinkButton link="/admin/1" label="Register Worker" className="admin-opt"/>
          <LinkButton link="/admin/1/editworker" label="Edit Worker" className="admin-opt"/>
          <LinkButton link="/admin/1/editshift" label="Add/Edit Shift" className="admin-opt"/>
          <LinkButton link="/admin/1/bookingsummary" label="Booking Summary" className="admin-opt"/>
          <LinkButton link="/admin/1/newbookings" label="New Bookings" className="admin-opt"/>
          <LinkButton link="/admin/1/viewavailability" label="View Availability" className="admin-opt"/>
        </div>

        <div className="dashboard-right-column">
          <h1> Welcome to Dashboard</h1>
          <AddWorker />
        </div>
      </div>
    )
  }
}
export default AdminDashboard;