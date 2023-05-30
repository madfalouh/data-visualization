import React from "react";

import logo from "../../assets/img/logo.png";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav-container">
      <div className="nav-title">
        <img src={logo} width={"130px"}></img>
        <h2> Mississippi Crash Data </h2>
      </div>
<h2>Welcome To  Mississippi <br></br>
 <span>Crash Data Portal  2020</span>  </h2>
    </div>
  );
}

export default Nav;
