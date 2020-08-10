
import React from "react";
import "./login_component.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withRouter, useHistory } from "react-router-dom";
import { signInWithGoogle } from "../../../firebase/firebase.utils";

function Login() {

    return (

        <div className="login_content">
            <form className="loginForm">

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

            </form>

        </div>
    )


}

export default Login;