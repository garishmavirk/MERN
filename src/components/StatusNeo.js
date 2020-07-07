import React from "react";
import login from "./login.png";
import "../components/style.scss";

function StatusNeo(props) {
  return (
    <div className="base-container" ref={props.containerRef}>
      <div className="content">
        <div className="image">
          <img src={login} />
        </div>
        <h1>
          Welcome to Status<strong>Neo</strong>
        </h1>
        <h3>Login to Continue😊</h3>
      </div>
      <div className="footer" />
    </div>
  );
}
export default StatusNeo;
