import React, { Component } from 'react'
import './App.css';
import Dashboard from './components/Dashboard';
import {BrowserRouter, Route} from 'react-router-dom';
import GetSchedules from './containers/GetSchedulesContainer';

class BusinessSchedule extends Component {
  render() {
    const {params} = this.props.match;
    const id = parseInt(params.id);
  
    return (
      <GetSchedules businessId={id}/>
    );
  }
}

function App() {
  return (
    <div>
     <BrowserRouter>
      <div>
        <Route path="/schedule/:id" component={BusinessSchedule} />
      </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
