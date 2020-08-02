import React from 'react'
import './login_register_component.scss'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Foo() {

    return (
        <div >
            <div className="header" >
                <span className="headerText">Bricks</span>
            </div>

            <div style={{ height: '80px', backgroundColor: 'rgb(218, 218, 218);', display: 'flex', marginTop: '10px' }} >
                <div style={{ width: '150px' }} ></div>
                <div style={{ fontSize: '35px' }} >welcome to Bricks! </div>
            </div>


            <div className="content">
                <div className="login">
                    <div className="TxtSize">login</div>
                    <TextField className='TextFieldLogin' type="email" id="outlined-basic" label="email" variant="outlined" />
                    <TextField className='TextFieldLogin' type="password" id="outlined-basic" label="password" variant="outlined" />
                    <div style={{ display: 'flex' }}> <Button className='ButtonLogin' variant="contained">sign in</Button><div style={{ width: '20px' }}></div><Button className='ButtonLogin' variant="contained">sign in with google</Button></div>

                </div>

                <div style={{ height: '500px', width: '50px', backgroundColor: 'rgb(218, 218, 218);' }}></div>


                <div className="register">
                    <div className="TxtSize">register</div>
                    <TextField className='TextFieldRegister' type="email" id="outlined-basic" label="email" variant="outlined" />
                    <TextField className='TextFieldRegister' id="outlined-basic" label="user name" variant="outlined" />
                    <TextField className='TextFieldRegister' type="password" id="outlined-basic" label="password" variant="outlined" />
                    <TextField className='TextFieldRegister' type="password" id="outlined-basic" label="Confirm password" variant="outlined" />
                    <Button className='ButtonRegister' variant="contained">sign up</Button>
                </div>

            </div>





        </div>
    )




}

export default Foo;