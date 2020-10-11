import React, { Component } from 'react'
import DateCell from './DateCell'

class DaysHeader extends Component {
  render() {
    // test date should be seven days before/after data in db
    var current = new Date("2020-10-18");  
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    /* array of DateCells for the next seven days */
    var dateCells = [];
    for (var i = 0; i < 7; i++) {
      var date = current.getDate();
      dateCells.push(<DateCell key={i} date={date} day={days[current.getDay()]} />);
      current.setDate((date) + 1);
    }

    return (
      <div id="days-header">
        <div id="header-blank"></div>
        {dateCells}
      </div>
    )
  }
}

export default DaysHeader;
