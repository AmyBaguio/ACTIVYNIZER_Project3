import React from 'react';
import MyNavbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Home from './components/Home';
import Calendar from './components/Calendar';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>  
          <MyNavbar />
    <Switch>
    <Route exact path={"/"}>
          < Home />
    </Route>
    <Route exact path={"/dashboard"}>
          <Dashboard />
    </Route>
    <Route path={"/calendar"}/>
          
    </Switch>
          <Calendar/>
          <Footer/>
    </BrowserRouter>      
  );
}
export default App;




