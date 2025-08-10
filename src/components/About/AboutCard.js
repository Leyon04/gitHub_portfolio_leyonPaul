import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Leyon Paul J </span>
            from <span className="purple"> Chennai, India.</span>
            <br />
            I am a Software Developer with over 3 years of professional experience at DEWDAS Technologies.
            <br />
            I have completed my Bachelor's in <span className="purple"> Mathematics </span> at Mar Gregorios College of Arts and Science.
            <br />
            I am a passionate software developer with a keen interest in web development.
            <br />
            I have experience in building applications using technologies like React, Node.js.
            <br />
            I have completed Master of Computer Application <span className="purple">(MCA)</span> at 
            SRM Arts and Science College.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">leyon</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;