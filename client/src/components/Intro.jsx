import React from "react";

function Intro (){
    return (
        <div className="intro">
            <div>
                <img className="introDash" src="/images/Intro/Rectangle.png" alt="" />
            </div>
            <div className="occupation">
                <h1>Miguel Cancel</h1>
                <h4>Full Stack Developer</h4>
            </div>
            <div>
                <img className="introDash" src="/images/Intro/Rectangle.png" alt="" />
            </div>
           <a href="#about"><img className="downArrow" src="/images/Intro/downArrow.png" alt="" /></a>
           
        </div>
    )
}

export default Intro