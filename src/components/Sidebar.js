import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Education from './Education';
import LanguagesAndSkills from './LanguagesAndSkills'
import PersonalInterests from './PersonalInterests';
import NonCareerRelated from './NonCareer';
import "./styles/Sidebar.css";


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (


      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  
  export default function Sidebar() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <div id="about-div">
        <Box
          style={{ backgroundColor: "black" }}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            p: 2,
            m: 1,
          }}
        >
          <Grid
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
              <Grid item xs={12} md={3}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab className='sidebar' label="Education" {...a11yProps(0)} />
          <Tab className='sidebar' label="Languages and Skills" {...a11yProps(1)} />
          <Tab className='sidebar' label="Personal Interests" {...a11yProps(2)} />
          <Tab className='sidebar' label="Side Projects" {...a11yProps(3)} />
        </Tabs>
        </Grid>
        <Grid item xs={12} md={9}>
        <TabPanel value={value} index={0}>
          <Education/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <LanguagesAndSkills/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <PersonalInterests/>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <NonCareerRelated/>
        </TabPanel>
        </Grid>
        </Grid>
      </Box>
      </div>

    );
  }