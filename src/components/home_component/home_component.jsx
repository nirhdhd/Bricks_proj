import React from "react";
import "./home_component.scss";
import { withRouter, useHistory } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function HomeComponent() {
  let history = useHistory();
  return (
    <div>
      <div className="header">
        <span className="headerText">Bricks</span>
        <Button className="logoutHederButton" variant="contained">
          logout
        </Button>
      </div>

      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flex: "0.5" }}></div>
        <div className="userName_place">welcom user</div>
      </div>

      <div className="contentUpper">
        <div style={{ flex: "0.5" }}></div>
        <div className="content">
          <div className="menuList">
            <Button
              className="menuButton"
              variant="contained"
              onClick={() => history.push("/createWorksheet/step_1")}
            >
              creat worksheet
            </Button>
            <Button className="menuButton" variant="contained" />
            <Button className="menuButton" variant="contained" />
          </div>
          <div style={{ flex: "9" }}></div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(HomeComponent);
