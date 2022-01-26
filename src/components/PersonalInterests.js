import * as React from "react";
// import Accordion from '@mui/material/Accordion';
// import Accordion from '@mui/material/Accordion';
// import Accordion from '@mui/material/Accordion';
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Icon from "@mui/material/Icon";
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

export default function PersonalInterests() {
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
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Sports{" "}
          </Typography>{" "}
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
              fontSize: "15px",
            }}
          >
            Basketball: Houston Rockets & Los Angeles Lakers<br></br>
            Soccer: Real Madrid F.C. & Liverpool F.C.<br></br>
            UFC: Israel Adesanya, Brandon Moreno, Julianna Peña
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
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Hobbies{" "}
          </Typography>{" "}
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
              fontSize: "15px",
            }}
          >
            Lifestyle: Weightlifting, Hiking, Travel, Movies <br></br>
            Music: Drake, Bad Bunny, Jhay Cortez, Lil Baby<br></br>
            Online: Competitive Call of Duty, Streaming, Reddit
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
            variant="p"
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
            Investments{" "}
          </Typography>{" "}
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
              fontSize: "15px",
            }}
          >
            Self-Education: Udemy, FreeCodeCamp, StackOverflow <br></br>
            Cryptocurrency Mining: Ethereum & Bitcoin<br></br>Index Funds: QQQ
            Investment Fund, NASDAQ, SPY<br></br>Individual Stock Picsk: AMD,
            NVIDIA, AAPL, MSFT
          </Typography>

        </AccordionDetails>
      </Accordion>
    </div>
  );
}
