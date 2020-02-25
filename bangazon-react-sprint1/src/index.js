import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import BangazonBuilder from './components/BangazonBuilder';

ReactDOM.render(
  <Router>
      <BangazonBuilder />
  </Router>
  , document.getElementById('root'));