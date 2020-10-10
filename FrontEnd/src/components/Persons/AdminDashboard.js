import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./Dashboard.css"
import AddWorker from '../Admin/AddWorker';
import AdminDashboardColumn from './AdminDashboardColumn';
import BookingSummary from '../Admin/BookingSummary';

class AdminDashboard extends Component {

  render() {
    var selected = "booking_summary";

    // if redirected from dashboard option
    if (this.props.location.state) {
      selected = this.props.location.state.selected;
    }

    const { params } = this.props.match;
    const id = parseInt(params.id);

    return (
      <div className="dashboard">
        <AdminDashboardColumn id={id} />

        {selected === "booking_summary" && <BookingSummary id={id} />}
        {selected === "add_worker" && <AddWorker id={id} />}

      </div>
    )
  }
}
export default AdminDashboard;