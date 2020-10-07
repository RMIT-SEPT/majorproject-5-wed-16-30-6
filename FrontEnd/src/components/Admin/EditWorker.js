import React, { Component } from 'react'

class EditWorker extends Component {
  render() {
    return (
      <div>
        <div>Edit worker page</div>
        <div>
          {this.props.createdUser ? this.props.createdUser + " has been created successfully." : ""}
        </div>
      </div>
    )
  }
}

export default EditWorker;
