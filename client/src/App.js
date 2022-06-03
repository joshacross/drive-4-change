import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function App() {
  return (
    <RecoilRoot className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
    </RecoilRoot>
  );
}

export default App;
