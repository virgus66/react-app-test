import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Test from "./test"

import './app.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.!!!
          </p>

          <BrowserRouter basename="/">
            <div className="App">
              <div style={{ display: 'flex', flexDirection: "column", width: "100%"}}>
                <Link to="/">Properties</Link>
                <Link to="/test">/test</Link>
                <Link to="/test/123098">/test/:id</Link>
              </div>

              <Switch>
                <Route path='/' exact render={ ()=> <div>welcome</div> } />
                <Route path='/test' exact render={ ()=> <div>test</div> } />
                <Route path='/test/:id' component={Test} />
              </Switch>
            </div>
          </BrowserRouter>
        
        </header>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
