import React from 'react';
import '../styles/home.css'
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid'

export default function Home() {
    return (
      <div id='home-div'>
      <Box  style={{ backgroundColor: "black" }}
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  p: 2,
                  m: 1,
                }}
              >
<h1>Hey</h1>
    </Box>
    </div>
    );
  }