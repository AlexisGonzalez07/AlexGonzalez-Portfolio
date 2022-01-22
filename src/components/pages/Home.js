import React from 'react';
import '../../App.css'
import companynight from '../../assets/images/alexglz.jpg'
import Box from "@mui/material/Box";

export default function Home() {
    return (
      <div style={{ width: "100%", backgroundColor: "black" }}>
      <Box style={{ backgroundColor: "black" }}
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  p: 2,
                  m: 1,
                }}
              >
                <h1>Hello</h1>
    </Box>
    </div>
    );
  }