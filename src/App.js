import React from 'react';
import 'App.css';
import Navbar from  'components/Navbar/Navbar.js';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'components/Pages/Home/Home.js'
import Services from 'components/Pages/Services/Services';
import Products from 'components/Pages/Products/Products';
import SignUp from 'components/Pages/SignUp/SignUp';





function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path = '/' exact component = {Home}/>
          <Route path = '/services' component = {Services}/>
          <Route path = '/products' component = {Products}/>
          <Route path = '/sign-up' component = {SignUp}/>
        </Switch>
      </Router> 
      
    </div>
  );
}

export default App;
