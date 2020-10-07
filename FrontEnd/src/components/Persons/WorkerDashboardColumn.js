import React, { Component } from 'react'
import { withRouter } from 'react-router';

class WorkerDashboardColumn extends Component {

  render() {
    const id = this.props.id;
    const path = "/worker/" + id + "/profile"

    return (
      <div className="dashboard-column">
        <div 
          className="opt" 
          onClick={
            () => this.props.history.push({
                pathname: path,
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
