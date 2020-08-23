import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import {BrowserRouter, Route} from 'react-router-dom';
import Schedule from './components/BusinessSchedule/Schedule';
//import Day from './components/BusinessSchedule/Day';
//import TimeCellList from './components/BusinessSchedule/TimeCellList';

const BusinessSchedule = () => {
  return (
    <div>
    <Schedule/>
    </div>
  );
}

function App() {
  return (
    <div>
     <Dashboard/>
     <BrowserRouter>
      <div>
        <Route path="/schedule" component={BusinessSchedule} />
      </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
