import React, { Component } from 'react'
import Person from './Persons/Person'
import "bootstrap/dist/css/bootstrap.min.css"

class Dashboard extends Component {
    render() {
        return (
            <div>
            <h1 className="alert alert-warning"> Welcome to Dashboard</h1>
                <Person/>
            </div>
        )
    }
}
export default Dashboard;