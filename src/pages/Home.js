import React from "react";
import "./styles/home.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';

export default function Home() {
  return (
    <>
      <div id="home-div">
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
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>
  <Grid item xs={12} md={6}>
    <h1>Software Developer</h1>

  </Grid>
  <Grid item xs={12} md={6}>
    <h1>This is my thing that will go on the right side of the website</h1>
  </Grid>

</Grid>


        </Box>
      </div>
    </>
  );
}
