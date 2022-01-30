import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import photo from "../../Assets/photo.jpg";
import Particle from "../Particle";
import About from "./About";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="main-section">
      <Particle />
      <Container fluid className="home-section" id="home">
        
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi!
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Himani Patel</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={photo} alt="home pic" className="img-fluid img-photo" />
            </Col>
          </Row>
        </Container>
        </Container>
        <About />
      </Container>
      
    </section>
  );
}

export default Home;
