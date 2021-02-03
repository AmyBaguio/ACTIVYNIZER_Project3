import React from 'react';
import MyNavbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';

import './App.css';

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
    </BrowserRouter>      
  );
}
export default App;
// const Home = () => <span>Home</span>;

// const About = () => <span>Calendar</span>;

// const Users = () => <span>Family</span>;

// const App = () => (
//   <MemoryRouter>
//     <Container className="p-3">
//       <Jumbotron>
//         <h1 className="header">Welcome To React-Bootstrap</h1>
//         <h2>
//           Current Page is{' '}
//           <Switch>
//             <Route path="/calendar">
//               <About />
//             </Route>
//             <Route path="/family">
//               <Users />
//             </Route>
//             <Route path="/">
//               <Home />
//             </Route>
//           </Switch>
//         </h2>

//       </Jumbotron>
//     </Container>
//   </MemoryRouter>
// );



