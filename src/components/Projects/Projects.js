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
              imgPath={bitsOfCode}
              isBlog={false}
              title="Ecommerce Warranty System Using NFTs"
              description="Spearheaded the creation of an NFT-based digital warranty card, detailing product information and tracking ownership. Developed features including a Sign Up-Log In System, CRUD operations on products, engaging user games, product transfers, and ownership verification.Deployed the smart contract using ERC-721 NFT tokens for seamless token transfers between peers."
              ghLink="https://github.com/DevAgrawal1112/Blockchain-based-eCommerce-Warranty-system-fg4"
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
