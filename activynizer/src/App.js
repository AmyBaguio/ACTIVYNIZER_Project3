import React from 'react';
import MyNavbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>  
          <MyNavbar />
          <Switch>
  <Route exact path={"/"}>
    <div>TODO: Home Page</div>
  </Route>
  <Route exact path={"/dashboard"}>
    <Dashboard />
  </Route>
  <Redirect to={"/dashboard"}/>
</Switch>
<Footer/>
    </BrowserRouter>      
  );
}
export default App;




