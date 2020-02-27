import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import BangazonBuilder from './components/BangazonBuilder';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router>
      <BangazonBuilder />
  </Router>
  , document.getElementById('root'));