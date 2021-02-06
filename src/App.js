import React from "react";
import MyNavbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Calendar from "./components/Calendar";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/calendar" component={Calendar} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
