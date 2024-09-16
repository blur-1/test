import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import linkedinIcon from '../assets/linkedin.png'
import whatsaapIcon from "../assets/whatsaap.png"
import emailIcon from "../assets/email.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <p className="">Copyright © 2024 - All Rights Reserved</p>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="mailto:brendarobles.contacto@gmail.com" target="_blank">
                <img src={emailIcon} />
              </a>
              <a href="https://wa.me/51961490149" target="_blank">
                <img src={whatsaapIcon} />
              </a>
              <a
                href="https://www.linkedin.com/in/brenda-robles-5160a2237/"
                target="_blank"
              >
                <img src={linkedinIcon} alt="linkedin" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
