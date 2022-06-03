import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from "./components/Nav";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <RecoilRoot className="App">
        <header className="App-header">
          <h1>Drive4Change</h1>
          </header>
          <Router>
          <Nav>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
          </Nav>
          </Router>
    </RecoilRoot>
  );
}

export default App;
