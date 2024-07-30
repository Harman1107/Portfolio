import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              title="Online Judge"
              description="Engineered an Online Judge platform enabling real-time code execution and evaluation for correctness, identifying compilation errors.mplemented a ReactJS frontend integrated with a NodeJS backend, Mongodb database, and JWT token authentication. Explored Docker techniques for code isolation to enhance security against untrusted codes."
              ghLink="https://github.com/DevAgrawal1112/OJ"
              demoLink="ec2-13-127-199-105.ap-south-1.compute.amazonaws.com:3000"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Ecommerce Website"
              description="Implemented Redux architecture to streamline frontend data flow. User and Seller views utilizing ReactJS with Redux
              integration. Features:- Payment using Stripe, media upload on Cloudinary, Separate admin routes.(Redux, ReactJS,
              Cloudinary, NodeJS, MongoDB,Heroku, Postman)"
              ghLink="https://github.com/DevAgrawal1112/OJ"
              demoLink="ec2-13-127-199-105.ap-south-1.compute.amazonaws.com:3000"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Poker-Game"
              description="Utilized www.deckofcardsapi.com to create a seamless and engaging card game experience. Implemented Socket.io
              to develop real-time communication between players during the game. Integrated responsive design principles into
              the development of the game interface. (ReactJS, NodeJS, MongoDB, Socket.io)"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Virtual Classroom using Unreal Engine"
              description="Built a virtual environment for students deprived of access to specialized Labs. Implemented 3 labs (2 Chemistry
              Labs, 1 Astronomy Lab). Tech Stack Used:- Unity (Virtual Environment using C), ReactJS( UI ), NodeJS ( Backend
              ), MetaMask ( Secure Login ), MongoDB."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Suno Gaana"
              description="Engineered a Music Player displaying top songs, artists, and native songs based on the user’s location. Used Shazam Core API and Geo Location API for loading songs and live location of a user respectively. Developed the frontend using ReactJS, tailwind, and incorporated Redux"
              ghLink="https://github.com/DevAgrawal1112/suno-gaana"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
