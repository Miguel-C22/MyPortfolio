import React from "react";
import Navigation from "./components/NavBar";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Project from "./components/Projects";
import Footer from "./components/Footer";
import Intro from './components/Intro'
import Form from './components/Form'
import ChatBot from "./components/chatBot";
// import main from "./supabase";

function App() {  
  return (
    <div className="appContainer">
      <Navigation />
      <img className="topBackgroundGraphic" src="/images/backgroundGraphic.png" />
      <div className="bodyContainer">
        <Intro />
        <About />
        <TechStack />
      </div>
      <div className="projectContainer">
        <Project />
      </div>
      <div className="form">
        <Form />
      </div>
      <img className="bottomBackgroundGraphic" src="/images/backgroundGraphic.png" />
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;

