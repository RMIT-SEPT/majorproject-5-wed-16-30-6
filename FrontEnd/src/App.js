import React from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Route} from 'react-router-dom';
import BusinessSchedule from './components/Booking/BusinessSchedule';
import bookingForm from './components/Booking/bookingForm.js';
import Home from './components/Home/Home';
import Login from './components/Home/Login';
import SignUp from './components/Home/SignUp';
import About from './components/Home/About';
import ContactUs from './components/Home/ContactUs';
import AdminDashboard from './components/Persons/AdminDashboard';
import Profile from './components/Persons/Profile';
import WorkerDashboard from './components/Persons/WorkerDashboard';
import CustomerDashboard from './components/Persons/CustomerDashboard';
import Logout from './components/Home/Logout';

function App() {
  return (
    <div>
     <BrowserRouter>
      <div>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/signup" component={SignUp} />
        <Route path="/admin/:id" component={AdminDashboard} />
        <Route path="/worker/:id" component={WorkerDashboard} />
        <Route path="/user/:id" component={CustomerDashboard} />
        <Route path="/business/:id/schedule" component={BusinessSchedule} />
        <Route path="/bookingForm" component={bookingForm} />
        <Route path="/user/:id/profile" component={Profile} />
      </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
