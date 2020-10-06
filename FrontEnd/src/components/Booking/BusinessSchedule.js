import React, { Component } from 'react'
import GetSchedules from '../../containers/GetSchedulesContainer';

class BusinessSchedule extends Component {
  render() {
    const { params } = this.props.match;
    const id = parseInt(params.id);

    return (
      <GetSchedules businessId={id} />
    );
  }
}

export default BusinessSchedule;
