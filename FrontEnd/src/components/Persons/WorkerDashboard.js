import React, { Component } from 'react'
import { Layout } from '../Home/Layout';
import WorkerDashboardColumn from './WorkerDashboardColumn';
import '../Persons/Dashboard.css';

class WorkerDashboard extends Component {
  render() {
    return (
      <Layout>
        <WorkerDashboardColumn />
      </Layout>
    )
  }
}

export default WorkerDashboard;
