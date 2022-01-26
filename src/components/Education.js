import * as React from "react";
// import Accordion from '@mui/material/Accordion';
// import Accordion from '@mui/material/Accordion';
// import Accordion from '@mui/material/Accordion';
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import Icon from "@mui/material/Icon";
import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIosSharp";
// import ExpandCircleDownSharpIcon from '@mui/icons-material/ExpandCircleDownSharp';
import "./styles/Education.css";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function Education() {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography
                      gutterBottom
                      variant="p"
                      component="div"
                      // id="personal-statement"
                      style={{
                        textAlign: "left",
                        fontFamily: "Montserrat",
                        color: "black",
                        fontWeight: 'bold',
                        fontSize: '18px'
                      }}
                      >
                      The University of Texas at Austin Coding Bootcamp
                    </Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography
                      gutterBottom
                      variant="p"
                      component="div"
                      // id="personal-statement"
                      style={{
                        textAlign: "left",
                        fontFamily: "Montserrat",
                        color: "black",
                        fontSize: '15px'
                      }}
                    >
                   
                   September 2021 - December 2021
            <br />I recently obtained a certificate from the Coding Bootcamp at
            the University of Texas at Austin in December of 2021. I'm so
            excited to take the skills I developed in those three months to the
            workplace. Although I had seen a lot about coding and software
            development, it wasn't until I got my first assignment that I ever
            opened up Visual Studio Code and typed my first line of code. Since
            then, I've worked on over 18 small projects, wrote my first gist,
            and collaborated on three applications with a talented team of
            developers (all three projects pinned below!). I still remember how
            tough it was to write my first code quiz, and how it was even
            tougher to style it after spending hours writing a script. But the
            growth pains made me a better coder, and there's still a long
            journey ahead of me. I may have learned HTML, CSS, Javascript,
            Express, SQL, React, MongoDB, RESTful APIs and other beautiful
            things in software development, but there's still Python, C, C#,
            Swift and other languages to learn - not to mention the thousands of
            component libraries and front-end frameworks out in the wild.          
                    </Typography>

        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">

        <Typography
                      gutterBottom
                      variant="p"
                      component="div"
                      // id="personal-statement"
                      style={{
                        textAlign: "left",
                        fontFamily: "Montserrat",
                        color: "black",
                        fontWeight: 'bold',
                        fontSize: '18px'
                      }}
                      >
            The University of Texas at Austin Red McCombs School of Business
                    </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography
                      gutterBottom
                      variant="p"
                      component="div"
                      // id="personal-statement"
                      style={{
                        textAlign: "left",
                        fontFamily: "Montserrat",
                        color: "black",
                        fontSize: '15px'
                      }}
                    >
                   
                   June 2016 - May 2019
            <br />I graduated with a BBA in Business Administration at the Red
            McCombs School of Business in May 2019 with a major in Supply Chain
            Management and a minor in Finance. I gained valuable knowledge in
            logistics, warehousing, strategic management, procurement, project
            management, and modeling/optimization. I also gained the ability to
            conduct qualitative and quantitative analyses to make optimal
            investment and operational decisions. 
                    </Typography>

        </AccordionDetails>
      </Accordion>
    </div>
  );
}
