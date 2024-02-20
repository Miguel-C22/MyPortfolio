import React from "react";
import { techStack } from "../Data/TechStack";

function TechStack(){
    function displayTechStack(){
        return  techStack.map((data) => 
        (
            <div className="eachTech" key={data.tech}>
                <img src={data.image} />
                <p>{data.tech}</p>
            </div>
        ))
    }

    return(
        <div className="techStackContainer">
            <h2>Tech Stack</h2>
            <div className="techContainer">
                {displayTechStack()}
            </div>
        </div>
    )
}

export default TechStack