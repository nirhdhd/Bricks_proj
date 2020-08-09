import React from "react";
import "./enter_component.scss";
import { FormControl } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withRouter, useHistory } from "react-router-dom";
//import { signInWithGoogle } from "../../firebase/firebase.utils";


import Login from "./login_component/login_component"
import Register from "./register_component/register_component"

function LoginRegister() {
  return (
    <div>

      <div className="header">
        <span className="headerText">Bricks</span>
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", flex: "1", flexDirection: "row", justifyContent: "end" }}> <Login /></div>
        <div style={{ display: "flex", flex: "1", flexDirection: "row", justifyContent: "end" }}> <Register /></div>
      </div>
    </div>
  );
}

export default withRouter(LoginRegister);
