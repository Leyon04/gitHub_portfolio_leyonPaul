import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import editor from "../../Assets/Projects/editor.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="zomato"
              description="I have developed a Zomato Front-End UI using React JS that replicates key elements of the Zomato website. This design captures the look and feel of a modern food delivery interface with a user-friendly layout and responsive design."
              ghLink="https://github.com/Leyon04/Zomato-Front-End-Design-main"
             
            />
          </Col>

            <Col md={4} className="project-card"> 
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="News paper"
              description="A responsive newspaper website built using HTML and CSS. Features include a clean layout, headline sections, article previews, and adaptive design for mobile and desktop. Showcases front-end skills in semantic HTML structure and modern CSS styling for media-rich content."
              ghLink="https://github.com/Leyon04/News-Paper"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="YRSK Digital "
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/Leyon04/marketing_frontend_main"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="BWF"
              description="Recreated the BWF website using HTML and CSS, focusing on responsive design, layout accuracy, and visual consistency. Includes structured sections for news, rankings, tournaments, and player profiles. Showcases front-end skills in semantic HTML and modern CSS styling for sports content."
              ghLink="https://github.com/Leyon04/BWF"
          
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink=""
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink=""
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here  */}
             {/* />  */}
           {/* </Col>  */} 
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
