import React from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Route} from 'react-router-dom';
import BusinessSchedule from './components/BusinessSchedule/BusinessSchedule';
import Home from './components/Home/Home';
import Login from './components/Home/Login';
import SignUp from './components/Home/SignUp';
import About from './components/Home/About';
import ContactUs from './components/Home/ContactUs';
import AdminDashboard from './components/Persons/AdminDashboard';
import AddWorker from './components/Admin/AddWorker';
import EditWorkerSchedule from './components/Admin/EditWorkerSchedule';
import Profile from './components/Persons/Profile';
import WorkerDashboard from './components/Persons/WorkerDashboard';

function App() {
  return (
    <div>
     <BrowserRouter>
      <div>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/admin/:id" component={AdminDashboard} />
        <Route path="/worker/:id" component={WorkerDashboard} />
        <Route path="/business/schedule/:id" component={BusinessSchedule} />
        <Route path="/admin/:id/addworker" component={AddWorker} />
        <Route path="/admin/:id/edit/workerschedule" component={EditWorkerSchedule} />
        <Route path="/user/:id/profile" component={Profile} />
      </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
