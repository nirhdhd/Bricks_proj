import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { StylesProvider } from "@material-ui/core";

// components imports
import LoginRegister from './components/login_register_component/login_register_component.jsx'
import HomeComponent from './components/home_component/home_component.jsx'
import Boo from './components/create_worksheet_component/create_worksheet_component.jsx'

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <Boo />
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
