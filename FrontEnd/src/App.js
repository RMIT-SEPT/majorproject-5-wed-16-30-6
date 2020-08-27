import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import {BrowserRouter, Route} from 'react-router-dom';
import GetSchedules from './containers/GetSchedulesContainer';

const BusinessSchedule = () => {
  return (
    <div>
    <GetSchedules/>
    
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
