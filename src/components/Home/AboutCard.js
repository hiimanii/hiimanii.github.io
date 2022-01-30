import React from "react";
import Card from "react-bootstrap/Card";
import { GiPaintBrush, GiQuillInk, GiForkKnifeSpoon  } from "react-icons/gi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Himani Patel </span>
            and I am pursuing Masters in Computer Science at <span className="purple">Rutgers University</span>, New Jersey, USA.
            <br />
            <br />
            I am passionate about Software Development and 
            <br />Machine Learning and Artificial Intelligence; and I also love:
          </p>
          <ul>
            <li className="about-activity">
              <GiPaintBrush />  Painting
            </li>
            <li className="about-activity">
              <GiQuillInk />  Calligraphy
            </li>
            <li className="about-activity">
              <GiForkKnifeSpoon />  Cooking and Eating delicious food
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
