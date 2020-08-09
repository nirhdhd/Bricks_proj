import React from 'react'
import './step_2.scss'
import { withRouter, useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { OutlinedInput } from '@material-ui/core';



function Step_2(props) {
    let history = useHistory();
    return (

        <div>
            <div className="step2_header"  >
                <span className="step2_headerText">Bricks</span>
                <Button className="step2_logoutHederButton" variant="contained">logout</Button>
            </div>

            <div className="step2_content" >
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="step2_input_place"></div>
                    <div className="step2_selectedWords_place" >
                        <p className="selectedWords">selected words</p>
                    </div>

                </div>
                <div>
                    <Button
                        className="step2_backStepButton"
                        variant="contained"
                        onClick={() => history.push("/createWorksheet/step_1")}>back</Button>
                    <Button
                        className="step2_nextStepButton"
                        variant="contained"
                        onClick={() => history.push("/createWorksheet/step_3")}>next step</Button>
                </div>
            </div>
        </div >
    )

}

export default withRouter(Step_2);