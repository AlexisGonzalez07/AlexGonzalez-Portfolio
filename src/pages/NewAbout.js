import React from "react";
import "./styles/about.css";
import Sidebar from "../components/Sidebar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function NewAbout() {
  return (
    <>
      <div id="about=div">
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
                  <Sidebar/>
              </Grid>
              <Grid item xs={12} md={9}>
                  
              </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
