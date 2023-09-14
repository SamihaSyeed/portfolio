import React from 'react';
import "./index.css"; 
import About from "./routes/About"
import Projects from "./routes/Projects"
import Contact from "./routes/Contact"
import { Route, Routes } from 'react-router-dom';
import Main from './routes/Main';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
