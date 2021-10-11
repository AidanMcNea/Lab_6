import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'; //impotred 
import Create  from './components/create'; // from components folder
import  Read  from './components/read'; // from components folder
import { Content } from './components/content.js'; // from components folder
import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap styling css 
import { Navbar , Nav} from 'react-bootstrap'; // navbar blue from bootsrap
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// switch goes onto different urls in the one single page application
// router must be warpped around all html
//    /.. goes exports from my components pages like content etc
//gets from component
class App extends Component{

  render(){
  return (
    <Router>

      <div className="App">
         <Navbar bg="primary" variant="dark">

       <Navbar.Brand href="#home">Navbar</Navbar.Brand>
       <Nav className="me-auto">
         <Nav.Link href="/content">Content</Nav.Link>
         <Nav.Link href="/read">Read</Nav.Link>
         <Nav.Link href="/create">Create</Nav.Link>
        </Nav>

       </Navbar>

       <Switch> 
          <Route path="/content">
            <Content />
          </Route>
          <Route path="/read">
            <Read />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
        
     </div>

     </Router>
    );
  }
}

export default App;
