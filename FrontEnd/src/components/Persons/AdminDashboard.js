import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./Dashboard.css"
import AddWorker from '../Admin/AddWorker';
import EditWorkerSchedule from '../Admin/EditWorkerSchedule';
import { Layout } from '../Home/Layout';
import AdminDashboardColumn from './AdminDashboardColumn';

class AdminDashboard extends Component {

  render() {
    var selected = "add_worker";

    // if redirected from dashboard option
    if (this.props.location.state) {
      selected = this.props.location.state.selected;
    }

    const { params } = this.props.match;
    const id = parseInt(params.id);

    return (
      <Layout>
        <div className="dashboard">
          <AdminDashboardColumn id={id} />

          { selected === "add_worker" && <AddWorker id={id} /> }
          { selected === "edit_worker" && <EditWorkerSchedule id={id} /> }

      </div>
      </Layout>
    )
  }
}
export default AdminDashboard;