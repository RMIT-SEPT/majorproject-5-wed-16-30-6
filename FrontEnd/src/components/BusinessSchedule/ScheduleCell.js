import React, { Component } from 'react'
import './BusinessSchedule.css';

class ScheduleCell extends Component {
    render() {
        return (
            <div class={this.props.class}>
              <div>{this.props.startTime}</div>
              <div>{this.props.endTime}</div>
            </div>
        )
    }
}

export default ScheduleCell;
