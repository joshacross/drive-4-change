import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login/';
import Signup from './pages/Signup';
// import './styles/index.css';
import './styles/styles.css';

function App() {
  return (
    <RecoilRoot className="App">
          <Home></Home>
          <Dashboard></Dashboard>
          <Login></Login>
          <Signup></Signup>
          {/* <Router>
          <Nav>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
          </Nav>
          </Router> */}
    </RecoilRoot>
  );
}

export default App;
