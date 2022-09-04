import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from 'react-bootstrap'
import s3 from "../assets/html-5.svg"
import s2 from "../assets/css-3.svg"
import s1 from "../assets/javascript.svg"
import s4 from "../assets/react.svg"
import s5 from "../assets/wordpress.svg"
import s6 from "../assets/mysql.svg"
import s7 from "../assets/figma.svg"
import s8 from "../assets/bootstrap.svg"
import s9 from "../assets/git.svg"
import s10 from "../assets/github.svg"
import s11 from "../assets/spring.svg"
import s12 from "../assets/postman.svg"
import s13 from "../assets/nodejs-icon.svg"
import colorSpark from "../assets/color-spark.png"

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 5000, min: 2000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <section className="skill" id="skills">
        <Container>
          <Row>
            <Col>
              <div className="skill-box">
                <h2>Skills</h2>
                <p>These are some technologies that I use to work with every day.</p><br></br>
                <Carousel responsive={responsive} infinite={true} draggable={true}  className="skill-slider">
                    <div className="item">
                        <img src={s1} alt="Image"></img>
                        <h5>JavaScript</h5>
                    </div>
                    <div className="item">
                        <img src={s2} alt="Image"></img>
                        <h5>Css3</h5>
                    </div>
                    <div className="item">
                        <img src={s3} alt="Image"></img>
                        <h5>Html5</h5>
                    </div>
                    <div className="item">
                        <img src={s4} alt="Image"></img>
                        <h5>React js</h5>
                    </div>
                    <div className="item">
                        <img src={s8} alt="Image"></img>
                        <h5>Bootstrap</h5>
                    </div>
                    
                    <div className="item">
                        <img src={s6} alt="Image"></img>
                        <h5>MySql</h5>
                    </div>
                    <div className="item">
                        <img src={s13} alt="Image"></img>
                        <h5>Node.js</h5>
                    </div>
                    <div className="item">
                        <img src={s9} alt="Image"></img>
                        <h5>Git</h5>
                    </div>
                    <div className="item">
                        <img src={s10} alt="Image"></img>
                        <h5>Github</h5>
                    </div>
                    <div className="item">
                        <img src={s12} alt="Image"></img>
                        <h5>Postman</h5>
                    </div>
                    
                    <div className="item">
                        <img src={s5} alt="Image"></img>
                        <h5>Wordpress</h5>
                    </div>
                    <div className="item">
                        <img src={s7} alt="Image"></img>
                        <h5>Figma</h5>
                    </div>
                    <div className="item">
                        <img src={s11} alt="Image"></img>
                        <h5>Spring Boot</h5>
                    </div>
                   
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
        <img className="background-image-left" src={colorSpark} alt="Image" />
      </section>
    </>
  );
};

export default Skills;
