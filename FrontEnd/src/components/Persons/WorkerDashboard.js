import React, { Component } from 'react'
import { Layout } from '../Home/Layout';
import WorkerDashboardColumn from './WorkerDashboardColumn';
import './Dashboard.css';
import WorkerProfile from './WorkerProfile';

class WorkerDashboard extends Component {

  render() {
    var selected = "profile";

    // if redirected from dashboard option
    if (this.props.location.state) {
      selected = this.props.location.state.selected;
    }

    const { params } = this.props.match;
    const id = parseInt(params.id);

    return (
      <Layout>
        <div className="dashboard">
          <WorkerDashboardColumn id={id} />

          {selected === "profile" &&
            <WorkerProfile id={id} />
          }
        
        </div>
      </Layout>
    )
  }
}

export default WorkerDashboard;
