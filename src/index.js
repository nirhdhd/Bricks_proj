import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { StylesProvider } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// components imports
import Home from "./components/home_component/home_component.jsx";
import Step_1 from "./components/create_worksheet_component/step_1";
import Step_2 from "./components/create_worksheet_component/step_2";
import Step_3 from "./components/create_worksheet_component/step_3";
import Enter from "./components/enter_component/enter_component.jsx"

import { auth } from './firebase/firebase.utils'




function App() {

  let unsubscribeFromAuth = () => null;

  const [currentUser, setCurrentUser] = useState(null); //user auth

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      console.log(user)
    });

    return () => {
      unsubscribeFromAuth();
    }
  }, []);


  return (
    <div>
      <Switch>
        <Route exact path="/sighnIn" component={Enter} />
        <Route exact path="/" component={Enter} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/createWorksheet/step_1" component={Step_1} />
        <Route exact path="/createWorksheet/step_2" component={Step_2} />
        <Route exact path="/createWorksheet/step_3" component={Step_3} />
      </Switch>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
