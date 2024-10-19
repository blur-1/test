import React, { useEffect } from 'react'
import { useState } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import linkedinIcon from '../assets/linkedin.png'
import whatsaapIcon from "../assets/whatsaap.png"
import emailIcon from "../assets/email.svg"
import logo from '../assets/firma-br.png'

const NavBar = () => {
    const[activeLink, setActiveLink] = useState('home');
    const[scrolling, setScrolling] = useState(false);
   
    useEffect(()=>{
            const onScroll = () =>{
                if (window.scrollY > 70){
                    setScrolling(true);
                }else{
                    setScrolling(false);
                }
            }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    },[])

    const onUpdateActivelink = (value) =>{
        setActiveLink(value);
    }

  return (
    <>
      <Navbar className={scrolling ? "scrolled" : ""} expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>  
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={()=> onUpdateActivelink('home')} className={activeLink == 'home'? 'active navbar-link': 'navbar-link'}>Home</Nav.Link>
            <Nav.Link href="#skills" onClick={()=> onUpdateActivelink('skills')} className={activeLink == 'skills'? 'active navbar-link': 'navbar-link'}>Skills</Nav.Link>
            <Nav.Link href="#projects" onClick={()=> onUpdateActivelink('projects')} className={activeLink == 'projects'? 'active navbar-link': 'navbar-link'}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="mailto:brendarobles.contacto@gmail.com" target="_blank"><img src={emailIcon} /></a>
                <a href="https://wa.me/51961490149" target="_blank"><img src={whatsaapIcon} /></a>
                <a href="https://www.linkedin.com/in/brenda-robles-5160a2237/" target="_blank"><img src={linkedinIcon} alt="linkedin"/></a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBar
