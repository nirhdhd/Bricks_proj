import React from 'react'
import './step_3.scss'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { OutlinedInput } from '@material-ui/core';
import { withRouter, useHistory } from "react-router-dom";


function Step_3() {
    let history = useHistory();
    return (

        <div>
            <div className=" step3_header"  >
                <span className="step3_headerText">Bricks</span>
                <Button className="step3_logoutHederButton" variant="contained">logout</Button>
            </div>

            <div className="step3_content" >
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="step3_input_place"></div>
                    <div className="step3_selectedWords_place" >
                        <p className="setting">work setting</p>
                    </div>

                </div>
                <div>
                    <Button className="step3_backStepButton" variant="contained" onClick={() => history.push("/createWorksheet/step_2")}>back</Button>
                    <Button className="step3_nextStepButton" variant="contained">FINISH</Button>
                </div>
            </div>
        </div >
    )

}

export default withRouter(Step_3);