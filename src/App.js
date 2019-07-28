import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Create from './components/Create';
import Update from './components/Update';
import Home from './components/Home';
function App() {
  return (



    <BrowserRouter>
      <div >
        <Navbar />
        <div className="container">
          <Route path='/' exact component={Home} />
          <Route path='/create' exact component={Create} />

          <Route path='/update/:id' exact component={Update} />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
