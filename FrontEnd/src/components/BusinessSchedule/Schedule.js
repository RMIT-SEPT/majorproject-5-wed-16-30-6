import React, { Component } from 'react'
import './BusinessSchedule.css';
import Day from './Day';
import TimeCellList from './TimeCellList';
import DaysHeader from './DaysHeader';

class Schedule extends Component {
    
    componentDidMount() {
        const { loadData } = this.props;
        loadData();
    }

    render() {
        return (
            <div id="schedule">
                {
                    this.props.schedule.map(day =>
                    <Day name={day.name} items={day.items} />
                )
            }
                <h3 id="month-year">August 2020</h3>
                <div id="schedule-grid">
                    <DaysHeader />
                    <TimeCellList />
                    <Day id="day1"/>
                    <Day id="day2"/>
                    <Day id="day3"/>
                    <Day id="day4"/>
                    <Day id="day5"/>
                    <Day id="day6"/>
                    <Day id="day7"/>
                </div>
            </div>
        )
    }
}

export default Schedule;
