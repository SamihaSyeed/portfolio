import React from 'react'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
// import ProjectDisplay from '../Components/ProjectDisplay/ProjectDisplay'
// import Picture from '../Components/images/saranya2.jpg'
import Home from '../Components/Home/Home'

const Main = () => {
  return (
        <div style={styles} >
            <Navbar />
            <Home />
            <Footer />
        </div>
  )
}

const styles={
  backgroundImage: "url()",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
}
export default Main