import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon'
import MenuIcon from '@material-ui/icons/Menu'
// import ExpandCircleDownSharpIcon from '@mui/icons-material/ExpandCircleDownSharp';
import './styles/Education.css'


export default function Education() {
    const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{justifyContent: 'center'}}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<MenuIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className='title' sx={{ width: '70%', flexShrink: 0 }}>
            The University of Texas at Austin Coding Bootcamp
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>September 2021 - December 2021</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          I recently obtained a certificate from the Coding Bootcamp at the University of Texas at Austin in December of 2021. I'm so excited to take the skills I developed in those three months to the workplace. Although I had seen a lot about coding and software development, it wasn't until I got my first assignment that I ever opened up Visual Studio Code and typed my first line of code. Since then, I've worked on over 18 small projects, wrote my first gist, and collaborated on three applications with a talented team of developers (all three projects pinned below!). I still remember how tough it was to write my first code quiz, and how it was even tougher to style it after spending hours writing a script. But the growth pains made me a better coder, and there's still a long journey ahead of me. I may have learned HTML, CSS, Javascript, Express, SQL, React, MongoDB, RESTful APIs and other beautiful things in software development, but there's still Python, C, C#, Swift and other languages to learn - not to mention the thousands of component libraries and front-end frameworks out in the wild.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<MenuIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          >
          <Typography sx={{ width: '70%', flexShrink: 0 }}> The University of Texas at Austin Red McCombs School of Business</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            June 2016 - May 2019
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I graduated with a BBA in Business Administration at the Red McCombs School of Business in May 2019 with a major in Supply Chain Management and a minor in Finance. I gained valuable knowledge in logistics, warehousing, strategic management, procurement, project management, and modeling/optimization. I also gained the ability to conduct qualitative and quantitative analyses to make optimal investment and operational decisions. 
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}