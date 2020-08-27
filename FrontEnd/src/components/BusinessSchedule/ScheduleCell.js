// import React, { Component } from 'react'
import React from 'react'
import PropTypes from 'prop-types'
import './BusinessSchedule.css';

const ScheduleCell = ({ id, businessId, workerId, startDateTime, endDateTime}) => (
    <div>
    <div>{businessId}</div>
    <div><span>Start:</span>{startDateTime}</div>
    <div><span>End:</span>{endDateTime}</div>
    <br/>
    </div>
)

ScheduleCell.propTypes = {
    schedules: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.object.isRequired,
            businessId: PropTypes.object.isRequired,
            workerId: PropTypes.object.isRequired,
            startDateTime: PropTypes.string.isRequired,
            endDateTime: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default ScheduleCell;
