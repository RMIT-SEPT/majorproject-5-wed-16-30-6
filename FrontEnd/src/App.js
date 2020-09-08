import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Route} from 'react-router-dom';
import AddWorker from './components/Admin/AddWorker';
import EditWorker from './components/Admin/EditWorker';

function App() {
  return (
    <div>
     <BrowserRouter>
      <div>
        <Route path="/admin/addworker" component={AddWorker} />
        <Route path="/admin/editworker" component={EditWorker} />
      </div>
     </BrowserRouter>
    </div>
  )
}

export default App;
