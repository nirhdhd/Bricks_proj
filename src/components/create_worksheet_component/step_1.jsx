import React from "react";
import "./step_1.scss";
import { withRouter, useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function Step_1(props) {
  let history = useHistory();
  return (
    <div>
      <div className="step1_header">
        <span className="step1_headerText">Bricks</span>
        <Button className="step1_logoutHederButton" variant="contained">
          logout
        </Button>
      </div>

      <div className="step1_content">
        <TextField
          label="Your text goes here :)"
          variant="outlined"
          className="step1_input_place"
          multiline
          rows={30}
        />
        <div>
          <Button
            className="step1_backStepButton"
            variant="contained"
            onClick={() => history.push("/home")}>back to home page</Button>
          <Button
            className="step1_nextStepButton"
            variant="contained"
            onClick={() => history.push("/createWorksheet/step_2")}
          >
            next step
        </Button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Step_1);
