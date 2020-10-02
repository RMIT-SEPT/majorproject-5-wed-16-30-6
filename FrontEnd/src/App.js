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
import Header from './components/Home/Header';
import bookingForm from "./components/bookingForm";

function App() {
  return (
    <div>
    
     <BrowserRouter>
     <Header />
      <div>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/business/schedule/:id" component={BusinessSchedule} />
        <Route path="/bookingForm" component={bookingForm} />
      </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
