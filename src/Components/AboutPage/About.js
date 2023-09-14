import React from 'react'
import devPic2 from '../images/dev-pic-2.jpg'
import '../ProjectDisplay/ProjectDisplaySty.css'

const About = () => {
  return (
    <div style={{display:"flex", margin:"80px auto",width:"80%"}}>
        
        <div>
            <div className='header-text'> ABOUT ME </div>
            <div style={{margin:"20px 0"}}>
                <p>Hello, I'm Saranya, a passionate front-end developer with a strong inclination towards all things technical.</p>
                <p>As a designer, I have a deep passion for crafting clean and functional websites and user interfaces. I invite you to explore my portfolio to see my projects.</p>
                <p>In my role as a coder, I am an experienced front-end developer skilled in coding with HTML, CSS, WordPress, jQuery, and PHP. My primary focus is on creating code that is clean, elegant, and highly efficient.</p>

            </div>
      </div>
        <div><img src={devPic2} width="300px" height='100%'/></div>
      
    </div>
  )
}

export default About