import React, { Component } from 'react'
import { Layout } from '../Home/Layout';
import CustomerDashboardColumn from './CustomerDashboardColumn';
import './Dashboard.css';

class CustomerDashboard extends Component {

  render() {
    // var selected = "";

    // if redirected from dashboard option
    if (this.props.location.state) {
      // selected = this.props.location.state.selected;
    }

    const { params } = this.props.match;
    const id = parseInt(params.id);

    return (
      <Layout>
        <div className="dashboard">
          <CustomerDashboardColumn id={id} />

        </div>
      </Layout>
    )
  }
}

export default CustomerDashboard;