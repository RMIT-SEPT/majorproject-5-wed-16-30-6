import React, { Component } from 'react'

class EditWorkerSchedule extends Component {

  /* call the API immediately after the components are rendered */
  componentDidMount() {
    const id = this.props.id;
    const param = { businessId: id };
    // this.props.dispatch(getSchedules(param));
  }

  render() {
    return (
      <div>
        <div>Edit worker schedule </div>
        <div>
          {this.props.createdUser ? this.props.createdUser + " has been created successfully." : ""}
        </div>
      </div>
    )
  }
}

export default EditWorkerSchedule;
