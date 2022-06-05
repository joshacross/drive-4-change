import React from 'react';
import {
  RecoilRoot,
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
    </RecoilRoot>
  );
}

export default App;
