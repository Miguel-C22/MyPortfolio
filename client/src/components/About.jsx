import React from "react";

function About(){

 return (
   <div id="about" className="aboutContainer">
    <div className="aboutMe">
        <h2 className="aboutHeading">About</h2>
        <div className="paragraph">
          <span className="line"></span>
          <p>My name is Miguel Cancel. 
            I am a full-stack developer experienced with a wide range of technologies. 
            Currently, I am pursuing my associate in applied science degree in Software Development through Anoka Tech. 
            Proficient in Front End, Backend, and AI technologies such as OpenAI API, Embedding, AI Models, AI Agents, and more. 
            I am transitioning from a background in welding and manufacturing to pursue a career in tech.
            My standout qualities include my strong work ethic and unwavering determination.
          </p>
        </div>
        
        <div className="aboutLinks">
            <a className="resumeBtn" href={require('../resume/Resume.pdf')} target="_blank">Resume</a>
            <a href="mailto: miguel.ganoza@yahoo.com"><img src="/images/email.png"/></a>
            <a href="https://github.com/Miguel-C22"><img src="/images/github.png"/></a>
            <a href="https://www.linkedin.com/in/miguel-canc-el-20941a15b/"><img src="/images/linkdin.png"/></a>
        </div> 
    </div>
    <img className="profilePic" src="/images/ProfilePicture.png"/> 
   </div>
 );

}

export default About