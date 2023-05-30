import React, { useRef } from "react";

import logo from "../../assets/img/logo.png";
import "./Nav.css";

function Nav() {

const  imgRef = useRef()  


window.addEventListener('resize', ()=> {

imgRef.current.style.width =  Math.min(  window.innerWidth *0.2 , 250 )  +"px"



}  )


  return (
    <div className="nav-container">
      <div className="nav-title">
        <img  ref={imgRef} src={logo} width={"250px"}></img>
        <h2> Mississippi Crash Data </h2>
      </div>
      <h2>
        Welcome To Mississippi <br></br>
        <span>Crash Data Portal 2020</span>{" "}
      </h2>
    </div>
  );
}

export default Nav;
