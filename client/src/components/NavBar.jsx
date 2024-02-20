import React from "react";
import useToggle from "../customHooks/Toggle";
import useWindowWith from "../customHooks/WindowWith";


function Navigation(){

 //Using Custom Hook
 const {toggle, toggleOnOff} = useToggle()
 const { windowWidth } = useWindowWith()

 return (
   <div className="navigation">
      <a href="/"><h1>MC</h1></a>
      <div onClick={toggleOnOff}>
      {!toggle || windowWidth > 700 ? <p className="hamburger">|||</p> : <p className="closeHamburger">x</p>}
      </div>
      <div className= {!toggle || windowWidth > 700 ? "links" : "displayDropDownMenu"}>
        <a href="#about"><img className="navImg" src="/images/About.png"/>About</a>
        <a href="#projects"><img className="navImg" src="/images/Projects.png"/>Projects</a>
        <a href={require('../resume/Resume.pdf')} target="_blank"><img className="navImg" src="/images/Resume.png"/>Resume</a>
        <a href="#form" className="contactBtn">Contact<img className="navImg" src="/images/Contact.png"/></a>
      </div>
   </div>
 );

}

export default Navigation