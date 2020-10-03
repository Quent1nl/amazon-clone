import React from 'react';
import './App.css';
import {  BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import Header from "./Header"

function App() {
  return (
    <Router>
      <div className="app">
        <switch>
          <Route path="/checkout">
              <h1>Checkout page</h1>
          </Route>
          <Route path="/login">
              <h1>Login page</h1>
          </Route>
          { /* default route */}
          <Route exact path="/">
            <Header/>
              <h1>Default page</h1>
          </Route>
        </switch>
      </div>
        
    </Router>
    
  );
}

export default App;
