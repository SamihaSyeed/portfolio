import React from 'react'
import "./ProjectDisplaySty.css"
import ProjectCard from './ProjectCard'
import calculatorImg from '../images/calc.jpg'
import snakeImge from '../images/snake.jpg'
import typeImg from '../images/type.jpg'
import '../Navbar/NavbarStyles.css'


const ProjectDisplay = () => {
    const projectDetails = [
        {
            id:1,
            img:calculatorImg,
            title:"CALCULATOR",
            description:"The clients wished their first home to reflect both their personalities; a coming together of classical, victorian aesthetics and contemporary, modern designs.",
            link: 'https://github.com/SamihaSyeed/calculator'
        },
        {
            id:2,
            img:snakeImge,
            title:"SNAKE GAME",
            description:"In line with the minimal approach, we went with a grey-on-grey monotone as our primary palette, complete with cement finished floor tiles, grey walls and grey ceiling.",
            link: 'https://github.com/SamihaSyeed/SNAKE_GAME'
        },
        {
            id:3,
            img:typeImg,
            title:"TYPING SPEED",
            description:"We layered pattern on pattern and used multiple types of textures and finishes. Multifunctional spaces, loud wallpapers, plenty of plants, signature stand-out tiling - this space has it all. ",
            link: 'https://github.com/SamihaSyeed/TypingTest'
        }
    ]
  return (
    <div>
        <div className='header-text' style={{"padding":"30px 0"}}> PROJECTS </div>
        <div className='project-display' >
            {projectDetails.map(card=> {
                return (<ProjectCard img={card.img} count={card.id} title={card.title} desc={card.description} link={card.link}/>)
            })}
    </div>
    </div>
  )
}


export default ProjectDisplay