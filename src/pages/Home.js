import React from "react";
import "./styles/home.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "50%",
  maxHeight: "50%",
  borderRadius: "10px",
});

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
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <Img
                id="bio-pic"
                alt="Picture at Galveston, TX taken in late 2021"
                src="./assets/images/Homepic1.jpg"
              ></Img>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                gutterBottom
                variant="h3"
                component="div"
                style={{
                  textAlign: "center",
                  fontFamily: "Monospace, sans-serif",
                  color: "#77B9F2",
                  letterSpacing: "10",
                  fontWeight: "bold",
                }}
              >
                Hey, I'm Alex!
                <br></br>
              </Typography>
              <Typography
                gutterBottom
                variant="p"
                component="div"
                id="personal-statement"
                style={{
                  textAlign: "center",
                  fontFamily: "Montserrat",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                Passionate and solutions-driven Full Stack Web Developer with a background in data modeling, optimization, and inventory management. Looking to develop autonomous business management solutions and improve current database management systems. Driven, collaborative, and effective leader with a proven ability to thrive in team environments. My most recent and successful project was a plant tracking application built using MongoDB, React, and GraphQL. Hoping to leverage my software and business skills to create innovative tools.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
