import React from 'react'
import './step_2.scss'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { OutlinedInput } from '@material-ui/core';



function Step_2() {
    return (

        <div>
            <div className="header"  >
                <span className="headerText">Bricks</span>
                <Button className="logoutHederButton" variant="contained">logout</Button>
            </div>

            <div className="content" >
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="input_place"></div>
                    <div className="selectedWords_place" >
                        <h1>selected words</h1>
                    </div>

                </div>
                <div>
                    <Button className="backStepButton" variant="contained">back</Button>
                    <Button className="nextStepButton" variant="contained">next step</Button>
                </div>

            </div>








        </div >
    )

}

export default Step_2;