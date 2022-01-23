import React from 'react';
import './styles/about.css'
// import alexglzpicture from '../../assets/images/alexglz.jpg'

export default function About() {
  return (
    <div className="row" style={{ backgroundColor: "#EBDBAE" }}>
    <div className="col-sm-12 col-lg-4">
    <img className="card-img-top" src='./assets/images/alexglz.jpg' alt="Alex Gonzalez"/>
    </div>
    <div className="col-sm-12 col-lg-8" align="center">
    <h2>About Me</h2>
    <p>
    Welcome to my Github portfolio page. I'm Alex, and I'm an upcoming web developer expected to graduate from the Coding Bootcamp at the University of Texas at Austin. When I'm not sharpening my coding skills, I'm most likely analyzing market moves, catching a game, or spending time with my loved ones. By December of 2021, I'll be a full-stack web developer capable of developing and deploying interactive user experiences, and given enough time, meet real-world needs with my applications.
    </p>
    <h2>Languages & Skills:</h2>
           <div >
           <a href="https://babeljs.io/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg" className="icon-skill" alt="babel" width="50" height="50"/> </a> 
           <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" className="icon-skill" alt="bootstrap" width="50" height="50"/> </a>
            <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" className="icon-skill" alt="css3" width="50" height="50"/> </a> 
            <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" className="icon-skill" alt="express" width="50" height="50"/> </a> 
            <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" className="icon-skill" alt="figma" width="50" height="50"/> </a> 
            <a href="https://heroku.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" className="icon-skill" alt="heroku" width="50" height="50"/> </a> 
            <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" className="icon-skill" alt="html5" width="50" height="50"/> </a>
            
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" className="icon-skill" alt="javascript" width="50" height="50"/> </a>
           
            <a href="https://jestjs.io" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" className="icon-skill" alt="jest" width="50" height="50"/> </a> 
            <a href="https://materializecss.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg" className="icon-skill" alt="materialize" width="50" height="50"/> </a>
            <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" className="icon-skill" alt="mongodb" width="50" height="50"/> </a>
            <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" className="icon-skill" alt="mysql" width="50" height="50"/> </a> 
            <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" className="icon-skill" alt="nodejs" width="50" height="50"/> </a>
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" className="icon-skill" alt="react" width="50" height="50"/> </a>
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="50" className="icon-skill" height="50"/> </a>
            <a href="https://webpack.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg" className="icon-skill" alt="webpack" width="50" height="50"/> </a>
           </div>
    </div>
  </div>
  );
}
