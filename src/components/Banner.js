import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import headerImg from "../assets/cat-1.png"

const Banner = () => {
  return (
    <>
    <section className="banner"id="home">
         <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className="tag">Welcome to my Portfolio</span>
                    <h1>{`Hi I'm Brenda </>`}<br></br><span className="wrap">Web Developer</span></h1>
                    <p>Constantly learning new technologies and exploring better ways to develop applications to grow as a professional and provide outstanding user experiences.</p>
                
                    <a href="mailto:brendarobles.contacto@gmal.com" target="_blank"><span>Let's Talk !</span></a>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg}/>
                </Col>
            </Row>
         </Container>
    </section>
    </>
  )
}

export default Banner
