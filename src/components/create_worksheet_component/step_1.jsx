import React from 'react'
import './step_1.scss'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { OutlinedInput } from '@material-ui/core';



function Step_1() {
    return (

        <div>
            <div className="header"  >
                <span className="headerText">Bricks</span>
                <Button className="logoutHederButton" variant="contained">logout</Button>
            </div>

            <div className="content" >
                <TextField

                    label="Your text goes here :)" variant="outlined" className="input_place" multiline rows={30} />
                <Button className="nextStepButton" variant="contained">next step</Button>
            </div>
            <div> </div>



        </div >
    )

}

export default Step_1;