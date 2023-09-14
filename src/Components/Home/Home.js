import React from 'react'
import Picture from '../images/dev-pic.jpg'
import './Home.css'
import ProjectDisplay from '../ProjectDisplay/ProjectDisplay'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
        <div>
            <img src={Picture} />
        </div>
        <div className='profile-name fade-in'>
            <div style={{fontSize:"60px", textShadow:" 0 1px white, 1px 0 white, 1px 0 white, 0 -1px white"}} ><b>SARANYA</b></div>
            <div style={{fontSize:"20px", textAlign:"right"}}>WEB DEVELOPER</div>
        </div>
        <a href='#project-display' style={{position:"absolute",color:"white",bottom:"50px", left:"50%"}} className='fa fa-arrow-down'>View Projects</a>
        <div id="project-display"> <ProjectDisplay /></div>       
       
    </>
  )
}

export default Home