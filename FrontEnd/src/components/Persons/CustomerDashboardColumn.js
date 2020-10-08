import React, { Component } from 'react'
import { withRouter } from 'react-router';

class CustomerDashboardColumn extends Component {

  render() {
    const id = this.props.id;
    const path = "/user/" + id + "/profile"

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
        
      </div>
    )
  }
}

export default withRouter(CustomerDashboardColumn);
