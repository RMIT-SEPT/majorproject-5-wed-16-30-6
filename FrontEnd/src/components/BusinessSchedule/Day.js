import React, { Component } from 'react'
import ScheduleCell from './ScheduleCell'

class Day extends Component {
    render() {
        return (
            <div id={this.props.id}>
                <ScheduleCell startTime="00:00" endTime="00:00" class="schedule-cell"/>
                <ScheduleCell startTime="00:00" endTime="00:00" class="schedule-cell"/>
                <ScheduleCell startTime="00:00" endTime="00:00" class="schedule-cell"/>
                <ScheduleCell startTime="00:00" endTime="00:00" class="schedule-cell"/>
                <ScheduleCell startTime="00:00" endTime="00:00" class="schedule-cell"/>
                <ScheduleCell startTime="00:00" endTime="00:00" class="schedule-cell"/>
                <ScheduleCell startTime="00:00" endTime="00:00" class="schedule-cell"/>
                <ScheduleCell startTime="00:00" endTime="00:00" class="schedule-cell"/>
                <ScheduleCell startTime="00:00" endTime="00:00" class="schedule-cell"/>
                <ScheduleCell startTime="00:00" endTime="00:00" class="schedule-cell"/>
                <ScheduleCell startTime="00:00" endTime="00:00" class="schedule-cell"/>
                <ScheduleCell startTime="00:00" endTime="00:00" class="schedule-cell"/>
                <ScheduleCell startTime="00:00" endTime="00:00" class="schedule-cell"/>           
            </div>
        )
    }
}

export default Day;
