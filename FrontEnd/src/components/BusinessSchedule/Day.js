import React, { Component } from 'react'
import ScheduleCell from './ScheduleCell'

class Day extends Component {
    render() {
        return (
            <div>
            <p>{this.props.name}</p>
            {
                this.props.items?.map(timeslot =>
                    <ScheduleCell startDateTime={new Date(timeslot.startDateTime).toLocaleTimeString()} endDateTime={new Date(timeslot.endDateTime).toLocaleTimeString()} class="schedule-cell"/>
                )
            }
            
            </div>
            
        )
    }
}

export default Day;
