import React, { useState, useEffect } from "react";
import "./styles/home.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "80%",
  maxHeight: "80%",
  borderRadius: "60px",
});

export default function Home() {
  // useEffect(() => {
  //   const fetchMe= async () => {
  //   try {
  //     let response = await fetch(`https://api.github.com/users/AlexisGonzalez07`)
  //     console.log(response)
  //     let user = await response.json()
  //     console.log(user)
  //     return user
  //   } catch (error) {
  //     console.log(error)
  //   }}
  // }, [])

  useEffect(() => {
    fetch(`https://api.github.com/users/AlexisGonzalez07`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  },[]);

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
              <h1>Hey, I'm Alex!</h1>
              <Img
                alt="Picture at Galveston, TX taken in late 2021"
                src="./assets/images/alexglz.jpg"
              ></Img>
            </Grid>
            <Grid item xs={12} md={6}>
              <h1>
                This is my thing that will go on the right side of the website
              </h1>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
