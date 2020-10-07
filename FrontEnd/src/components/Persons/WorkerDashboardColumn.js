import React, { Component } from 'react'
import { withRouter } from 'react-router';

class WorkerDashboardColumn extends Component {

  render() {
    const id = this.props.id;
    const profilePath = "/worker/" + id + "/profile";
    const accountPath = "/worker/" + id + "/account"

    return (
      <div className="dashboard-column">
        <div
          className="opt"
          onClick={
            () => this.props.history.push("/home")
          }
        >
          Home
        </div>
        <div 
          className="opt" 
          onClick={
            () => this.props.history.push({
                pathname: profilePath,
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
                pathname: accountPath,
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
