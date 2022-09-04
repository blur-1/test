import React from 'react'
import  {Col}  from 'react-bootstrap'
import github from "../assets/github.svg"

const ProjectCard = ({title, imgUrl, webPath}) => {
  return (
      <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx">
            <img src={imgUrl} alt="as"/>
            <div className="proj-text">
                <h4>{title}</h4>
                <div className="btn-site">
                  <a href={webPath} target="_blank">Visit<img src={github} /></a>
                </div>
            </div>
        </div>
      </Col>
  )
}

export default ProjectCard
