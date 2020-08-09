


import React from "react";
import "./register_component.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withRouter, useHistory } from "react-router-dom";

function Register() {

    return (


        <form className="registerForm">
            <div className="register">
                <div className="register_TxtSize">register</div>
                <TextField
                    className="register_TextFieldRegister"
                    type="email"
                    id="outlined-basic"
                    label="email"
                    variant="outlined"
                />
                <TextField
                    className="register_TextFieldRegister"
                    id="outlined-basic"
                    label="user name"
                    variant="outlined"
                />
                <TextField
                    className="register_TextFieldRegister"
                    type="password"
                    id="outlined-basic"
                    label="password"
                    variant="outlined"
                />
                <TextField
                    className="register_TextFieldRegister"
                    type="password"
                    id="outlined-basic"
                    label="Confirm password"
                    variant="outlined"
                />
                <Button className="register_ButtonRegister" variant="contained">
                    sign up
     </Button>
            </div>
        </form>

    )


}

export default Register;