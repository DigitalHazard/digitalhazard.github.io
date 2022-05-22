import React from 'react';
//import Starcomponent from '../src/components/Star/index.tsx';
import logo from '../src/assets/star.svg';
import './App.css';
import Box from '@material-ui/core/Box';
import { ImageList } from '@material-ui/core';
import ImageListItem from '@material-ui/core/ImageListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
//import Slide from '@mui/material/Slide';
//import PROJECTS from '../src/assets/projects.ts';

function App() {
  return (
    <div className="App">
      <Box className="NavBar">
        <ul>
          <a href="./">Home</a>
          <a href="https://github.com/AlissonRoss?tab=repositories">Projects</a>
          <a href="https://www.linkedin.com/in/alisson-ross/">LinkedIn</a>
        </ul> 
      </Box>
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        Alisson Ross
        
      </header>
  
      <main className='App-main'>
        <Box className="Box-main">
          <div className="Hello-world">Hello World!<br/></div>
          My name is Alisson Ross.<br/>
            I am a Computer Science and Engineering major at Merced Community College.
            I am also a Front-end web developer for HackMerced and a IT Assistant for SJDC.
            I make website components using ReactJS, Typescript, and other front-end tools.<br/>
            This site is under current re-construction.
        
          
        </Box>
       {/*<Box className="Box-projects">

          Projects Here
        </Box>*/}
      </main>
      <footer className='App-footer'>
        <a
          className="App-link"
          href="https://github.com/AlissonRoss"
          target="_blank"
          rel="noopener noreferrer"
        >
          <br/>Made with &#128151; at Alisson's Github
        </a>
      </footer>
    </div>
    
  );
}

export default App;
