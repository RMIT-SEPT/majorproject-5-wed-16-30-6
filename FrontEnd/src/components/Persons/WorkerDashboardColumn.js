import React, { Component } from 'react'
import { withRouter } from 'react-router';

class WorkerDashboardColumn extends Component {

  render() {
    return (
      <div className="dashboard-column">
        <div 
          className="opt" 
          onClick={
            () => this.props.history.push({
                pathname: "/worker/1/profile",
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
                pathname: "/worker/1/account",
                state: { 
                  selected: "account"
                }
            })
          }
        >
          Account
        </div>
      </div>
    )
  }
}

export default withRouter(WorkerDashboardColumn);
