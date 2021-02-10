import React from "react";
import MyNavbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Calendar from "./components/Calendar";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from "react-bootstrap";


function App() {
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#5e92f3",
      main: "#1565c0",
      dark: "#003c8f",
      contrastText: "#ffffff"
    },
    secondary: {
      light: "#ffffff",
      main: "#ffeb3b",
      dark: "#c2c2c2",
      contrastText: "#000000"
    }
  }
});
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>

      <MyNavbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/calendar" component={Calendar} />
      </Switch>
      <Footer />

    </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;

