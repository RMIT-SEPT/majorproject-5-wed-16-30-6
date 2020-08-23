import React, { Component } from 'react'
import DateCell from './DateCell'


class DaysHeader extends Component {
    render() {
        return (
            <div id="days-header">
                <div id="header-blank"></div>
                <DateCell date="24" day="MON" class="header-day"/>
                <DateCell date="25" day="TUE" class="header-day"/>
                <DateCell date="26" day="WED" class="header-day"/>
                <DateCell date="27" day="THU" class="header-day"/>
                <DateCell date="28" day="FRI" class="header-day"/>
                <DateCell date="29" day="SAT" class="header-day"/>
                <DateCell date="30" day="SUN" class="header-day"/>
            </div>
        )
    }
}

export default DaysHeader;
