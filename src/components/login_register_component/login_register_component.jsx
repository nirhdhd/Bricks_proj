import React from "react";
import "./login_register_component.scss";
import { FormControl } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withRouter, useHistory } from "react-router-dom";
import { signInWithGoogle } from "../../firebase/firebase.utils";

function LoginRegister() {
  return (
    <div>
      <div className="login_header">
        <span className="login_headerText">Bricks</span>
      </div>

      <div
        style={{
          height: "80px",
          backgroundColor: "rgb(218, 218, 218)",
          display: "flex",
          marginTop: "10px",
        }}
      >
        <div style={{ width: "150px" }}></div>
        <div style={{ fontSize: "35px" }}>welcome to Bricks! </div>
      </div>

      <div className="login_content">
        <form className="login_loginForm">
          <div className="login_login">
            <div className="login_TxtSize">login</div>
            <TextField
              className="login_TextFieldLogin"
              type="email"
              id="outlined-basic"
              label="email"
              variant="outlined"
            />
            <TextField
              className="login_TextFieldLogin"
              type="password"
              id="outlined-basic"
              label="password"
              variant="outlined"
            />
            <div style={{ display: "flex" }}>
              {" "}
              <Button className="login_ButtonLogin" variant="contained">
                sign in
              </Button>
              <div style={{ width: "20px" }}></div>
              <Button
                onClick={signInWithGoogle}
                className="login_ButtonLogin"
                variant="contained"
              >
                sign in with google
              </Button>
            </div>
          </div>
        </form>

        <div
          style={{
            height: "500px",
            width: "50px",
            backgroundColor: "rgb(218, 218, 218)",
          }}
        ></div>
        <form className="login_registerForm">
          <div className="login_register">
            <div className="login_TxtSize">register</div>
            <TextField
              className="login_TextFieldRegister"
              type="email"
              id="outlined-basic"
              label="email"
              variant="outlined"
            />
            <TextField
              className="login_TextFieldRegister"
              id="outlined-basic"
              label="user name"
              variant="outlined"
            />
            <TextField
              className="login_TextFieldRegister"
              type="password"
              id="outlined-basic"
              label="password"
              variant="outlined"
            />
            <TextField
              className="login_TextFieldRegister"
              type="password"
              id="outlined-basic"
              label="Confirm password"
              variant="outlined"
            />
            <Button className="login_ButtonRegister" variant="contained">
              sign up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default withRouter(LoginRegister);
