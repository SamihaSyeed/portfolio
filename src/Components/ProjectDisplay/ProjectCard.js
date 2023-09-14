import React from 'react'
import { Link } from 'react-router-dom'
import "./ProjectDisplaySty.css"

const ProjectCard = (props) => {
  return (
    <div>
      <Link to={`${props.link}`}>
      <div className='project-card'>
      <div className='header-text'>{props.title}</div>
      <div style={{"backgroundImage":`url(${props.img})`, height:"100%", backgroundRepeat:"no-repeat", backgroundSize:"400px 300px"}}>
          
      </div>
    </div>
      </Link>
    </div>
  )
}



export default ProjectCard
