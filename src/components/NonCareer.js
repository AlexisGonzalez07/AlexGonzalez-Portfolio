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

export default function NonCareerRelated() {
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
            variant="div"
            component="div"
            // id="personal-statement"
            style={{
              textAlign: "left",
              fontFamily: "Montserrat",
              color: "black",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Procurement & Supplier Management Case for Target - 2019
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography
            gutterBottom
            variant="div"
            component="div"
            // id="personal-statement"
            style={{
              textAlign: "left",
              fontFamily: "Montserrat",
              color: "black",
              fontSize: "15px",
            }}
          >
            <li>
              Conducted a market, price, and cost analysis of the bicycle
              industry to develop a sourcing strategy
            </li>
            <li>
              Maximized the expected portfolio profit and performed qualitative
              and quantitative analyses of suppliers
            </li>
            <li>
              Collaborated with a team of supply chain undergraduates and placed
              1st in the competition to earn a $600 scholarship
            </li>
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
            variant="div"
            component="div"
            // id="personal-statement"
            style={{
              textAlign: "left",
              fontFamily: "Montserrat",
              color: "black",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Operations Management Practicum for Micron Technology, Inc - 2018
          </Typography>

        </AccordionSummary>
        <AccordionDetails>
        <Typography
            gutterBottom
            variant="div"
            component="div"
            // id="personal-statement"
            style={{
              textAlign: "left",
              fontFamily: "Montserrat",
              color: "black",
              fontSize: "15px",
            }}
          >
            <li>
              Communicated with professionals via technological outlets to
              determine project scope and understand client needs
            </li>
            <li>
              Familiarized a team in operations and supply chain work and
              leveraged their skills to facilitate problem-understanding
            </li>
            <li>
              Oversaw the creation of a postponement strategy to reduce
              inventory and increase customer satisfaction
            </li>
          </Typography>

        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography
            gutterBottom
            variant="div"
            component="div"
            // id="personal-statement"
            style={{
              textAlign: "left",
              fontFamily: "Montserrat",
              color: "black",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
Organizational Behavior Consulting Project for Dell Medical School - 2018          </Typography>

        </AccordionSummary>
        <AccordionDetails>
        <Typography
            gutterBottom
            variant="div"
            component="div"
            // id="personal-statement"
            style={{
              textAlign: "left",
              fontFamily: "Montserrat",
              color: "black",
              fontSize: "15px",
            }}
          >
            <li>
              Led a team of business undergraduate students to reduce the flow
              time of a procurement request
            </li>
            <li>
              Consolidated research materials into a professional slide
              presentation to influence upper management
            </li>
            <li>
              Summarized findings into an Executive Summary Report - including
              action-implementation plans to reduce flow time by 25%
            </li>
          </Typography>

        </AccordionDetails>
      </Accordion>
    </div>
  );
}
