import React from "react";
import ProjectItem from "../components/ProjectItem";
import { Data } from "../helpers/Data";
import { Card } from "react-bootstrap";
import Carousel from "../pages/Carousel";

import "../styles/Projects.css";
import "../styles/Home.css";

function Home() {
  return (

    <div>

      <div className="home">
      <section>
        <div className="about">
          <Card>
            <Card.Body>
              <h2>Robinson Cerrato</h2>
            </Card.Body>
          </Card>
          <div className="prompt">
            <p>
              Before starting to work as a software developer, I used to work as
              a Production Supervisor in medical industries, as I wanted to know
              more about working with people and gain experience as a
              professional. I had the opportunity to grow in problem solving,
              customer service and also quality and leadership skills. I am
              currently developing my skills area, acquiring knowledge in
              HTML-CSS-Javascript, as well as studying. Feel free to reach me
              out if you want to know more about me!
            </p>
           
          </div>
        </div>
      </section>
      </div>

      <div>
      <section>
        <div className="about1">
          <h2> My Skills</h2>
          <div className="prompt">
            <div className="projects">
              <div className="projectList">
                {Data.map((project, idx) => {
                  return <ProjectItem id={idx} image={project.image} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section> 
      </div>

      {/* <div div className="home" >
      <section>
        <div className="about">
          <h2> My Skills</h2>
          <div className="prompt">
            <div className="projects">
              <div className="projectList">
                {Data.map((project, idx) => {
                  return <ProjectItem id={idx} image={project.image} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section> 
      </div> */}

      <Carousel></Carousel>

  </div>
 

      
    
  );
}

export default Home;
