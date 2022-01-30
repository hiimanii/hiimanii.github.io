import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import housing from "../../Assets/Projects/Housing.png";
import tsp from "../../Assets/Projects/TSP.png";
import viu from "../../Assets/Projects/VIU.png";
import tracker from "../../Assets/Projects/Tracker.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={viu}
              isBlog={false}
              title="Voyage into the Unknown"
              description="A semester-long project for the coursework: Intro to AI; where I designed and implemented algorithms, using A* as base and Machine
              Learning, for different variants of target finding agent in the given gridworld with obstacles, where the agent has no prior knowledge of the
              environment and learns about it as it traverses along the gridworld.
              Variables are as follows: 1) Target location 2) Stationary or moving target 3) Field of view of the agent 4) Inferring capability of the agent 5)
              Movement constraints 6) Cell type: block or unblocked 7) Terrain type of unblocked cells."
              link="https://github.com/hiimanii/Voyage-into-the-Unknown"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tsp}
              isBlog={false}
              title="Travelling Salesman Problem Variations"
              description="Implemented three genetic algorithms: Ant Colony Optimization, Black Hole Optimization, Particle Swarm Optimization; to find a
              polynomial-time solution of an NP-Hard problem and analyzed the space and time complexity along with optimality of the solutions.
              Developed UI for taking user inputs and visualizing the output of resulting suboptimal shortest tour from a starting point traversing all cities."
              link="https://github.com/hiimanii/TSP-variants"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={housing}
              isBlog={false}
              title="Ames Housing Dataset Analysis and Prediction"
              description="Analyzed and predicted the asset value relating to different features present in the Ames housing Dataset. Performed various analysis techniques to find interesting observations about the data. Also, applied techniques like log-transformation, removing outliers, making models robust against outliers, feature selection, feature engineering, label encoding and modelling to improve the performance of linear regression models on Ames dataset."
              link="https://github.com/hiimanii/Ames-Housing-Dataset-Analysis-and-Prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tracker}
              isBlog={false}
              title="Mask-NoMask Tracker Using YOLOv4-DeepSort"
              description="Tracking people and detecting whether they are wearing a face mask or not on an entry gate from surveillance camera input.
              Also implemented people counter using the same inferences which decrease the Analytics load on the server drastically."
              link="https://github.com/hiimanii/Mask-NoMask-Tracker"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
