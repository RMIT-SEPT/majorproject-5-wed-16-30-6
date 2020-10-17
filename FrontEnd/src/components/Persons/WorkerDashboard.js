import React, { Component } from 'react'
import { connect } from "react-redux";
import WorkerDashboardColumn from './WorkerDashboardColumn';
import './Dashboard.css';
import WorkerProfile from './WorkerProfile';
import { Redirect } from 'react-router-dom';


class WorkerDashboard extends Component {

  render() {
    if (!this.props.login) {
      return <Redirect to="/home" />
    }

    var selected = "profile";

    // if redirected from dashboard option
    if (this.props.location.state) {
      selected = this.props.location.state.selected;
    }

    const { params } = this.props.match;
    const id = parseInt(params.id);

    return (
      
      <div className="dashboard">
        <WorkerDashboardColumn id={id} />

        {selected === "profile" &&
          <WorkerProfile id={id} />
        }
      
      </div>
      
    )
  }
}

const mapStateToProps = state => {
  const currentState = state.loginReducer[state.loginReducer.length - 1];
  
  return {
    login: currentState.login,
    person: currentState.person,
  }
}

export default connect(mapStateToProps, null)(WorkerDashboard);
