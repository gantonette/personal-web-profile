import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

import projectBasic from "../assets/img/projectBasic.png";
import projectPort from "../assets/img/projectPort.png";
import projectCalc from "../assets/img/projectCalc.png";



import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Box2HeartFill } from "react-bootstrap-icons";

export const Projects = () => {

  const projects = [
    {
      title: "Basic Collection of Calculators",
      description: "Design & Development",
      imgUrl: projectBasic,
    },
    {
      title: "Personal Web Profile",
      description: "THIS beautiful specimen. Made with React, Bootstrap, and CSS.",
      imgUrl: projectPort,
    },
    {
      title: "Weightiply",
      description: "Weight related calculator using React + Bootstrap",
      imgUrl: projectCalc,
    },
   
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Humble beginnings... <Box2HeartFill size={25} /></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">gallery</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">freelancing</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>coming soon...</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>in progress...</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}