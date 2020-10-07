import React, { Component } from 'react'
import { Layout } from '../Home/Layout';
import WorkerDashboardColumn from './WorkerDashboardColumn';
import './Dashboard.css';
import WorkerProfile from './WorkerProfile';

class WorkerDashboard extends Component {
  constructor() {
    super();
    
    this.state = {
      selected: "profile"
    }
  }

  // changeState(selected) {
  //   var newState = this.state;
  //   newState.selected = selected;
  //   this.setState(newState);
  // }

  render() {
    var selected = ""

    // if redirected from dashboard option
    if (this.props.location.state) {
      selected = this.props.location.state.selected;
    }

    return (
      <Layout>
        <div className="dashboard">
          <WorkerDashboardColumn />

          {selected === "profile" &&
            <WorkerProfile />
          }
        
        </div>
        
      </Layout>
    )
  }
}

export default WorkerDashboard;
