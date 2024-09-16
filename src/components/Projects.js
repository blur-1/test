import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/pj2.jpg";
import projImg2 from "../assets/ds3.jpg";
import projImg3 from "../assets/pj3.jpg";
import ds1 from "../assets/ds1.jpg";
import ds2 from "../assets/ds2.jpg";
import ds3 from "../assets/pj1.jpg";
import ds4 from "../assets/ds4.jpg";
import ds5 from "../assets/ds5.jpg";
import ds6 from "../assets/ds6.jpg";
import ds7 from "../assets/ds7.jpg";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects_tab1 = [
    {
      title: "E-Shop",
      imgUrl: ds7,
      webPath:"https://blur-1.github.io/ecommerce-react-24/",
    },
    {
      title: "Responsive Web Design",
      imgUrl: projImg2,
      webPath:"https://blur-1.github.io/TechProducts/",
    },
    {
      title: "My Budget",
      imgUrl: projImg3,
      webPath:"https://blur-1.github.io/Presupuesto-React/",
    }
  ];
  const projects_tab2 = [
    {
      title: "Landing Page",
      imgUrl: ds1,
      webPath:"https://blur-1.github.io/landing-festival/",
    },
    {
      title: "School Website",
      imgUrl: ds6,
      webPath: "https://blur-1.github.io/webAngUni/",
    },
    {
      title: "Credit Card Register",
      imgUrl: projImg1,
      webPath:"https://blur-1.github.io/creditCard/",
    },
  ];
  const projects_tab3 = [
    {
      title: "Home Decor Web",
      imgUrl: ds4,
      webPath:"https://blur-1.github.io/tiendaMuebles/",
    },
    {
      title: "Landing Page",
      imgUrl: ds2,
      webPath:"https://blur-1.github.io/landing-page/#",
    },
    {
      title: "Register & Counter Votes",
      imgUrl: ds5,
      webPath:"https://blur-1.github.io/votosAngular/",
    },
  ];
  return (
    <>
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col>
              <h2>Projects</h2>
              <p>I've worked on different personal projects, Which I enjoyed a lot building them.
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">3</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects_tab1.map((projectItem, index) => {
                        return <ProjectCard key={index} {...projectItem} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>
                      {projects_tab2.map((projectItem, index) => {
                        return <ProjectCard key={index} {...projectItem} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row>
                      {projects_tab3.map((projectItem, index) => {
                        return <ProjectCard key={index} {...projectItem} />;
                      })}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Projects;
