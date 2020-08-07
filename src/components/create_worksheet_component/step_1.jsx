import React from "react";
import "./step_1.scss";
import { withRouter,useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function Step_1(props) {
  return (
    <div>
      <div className="header">
        <span className="headerText">Bricks</span>
        <Button className="logoutHederButton" variant="contained">
          logout
        </Button>
      </div>

      <div className="content">
        <TextField
          label="Your text goes here :)"
          variant="outlined"
          className="input_place"
          multiline
          rows={30}
        />
        <Button
          // onClick={() => props.history.pushState("/step_2")}
          className="nextStepButton"
          variant="contained"
        >
          next step
        </Button>
      </div>
      <div> </div>
    </div>
  );
}

export default withRouter(Step_1);
