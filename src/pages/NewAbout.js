import React, {useState} from "react";
import "./styles/about.css";
import Sidebar from "../components/Sidebar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Education from "../components/Education";
import LanguagesAndSkills from "../components/LanguagesAndSkills";
import PersonalInterests from "../components/PersonalInterests";
import NonCareerRelated from "../components/NonCareer";

export default function NewAbout() {
    const [currentSection, setCurrentSection] = useState('Education');

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderSection = () => {
      if (currentSection === 'Education') {
        return <Education />;
      }
      if (currentSection === 'Languages and Skills') {
        return <LanguagesAndSkills />;
      }
      if (currentSection === 'Personal Interests') {
        return <PersonalInterests/>;
      }
      if (currentSection === 'Non Career Related') {
        return <NonCareerRelated />;
      }
      return <Education />;
    };
  
    const handleSectionChange = (section) => setCurrentSection(section);

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
                  <Sidebar currentSection={currentSection} handleSectionChange={handleSectionChange}/>
              </Grid>
              <Grid item xs={12} md={9}>
                  {renderSection()}
              </Grid>
          </Grid>
        </Box>
      </div>
  );
}
