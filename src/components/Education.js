import React from "react";
import {
    Button,
    Container,
    Grid,
    Header,
    Image,
    Segment,
  } from "semantic-ui-react";
  import Box from "@mui/material/Box";
  import Typography from "@mui/material/Typography";


import './styles/Education.css'


export default function Education() {
    return (
        <div id='education-div' style={{backgroundImage: 'url(./assets/images/austinnightpic.jpg)'}}>
        <Segment style={{ padding: "0em 0em",}} vertical>
        <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  p: 2,
                  m: 1,
                }}
              >
                <Grid stackable columns={1}>
                  <Grid.Column textAlign="center" width={16}>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      style={{
                        textAlign: "center",
                        fontFamily: "Oswald, sans-serif",
                        color: "#EBDBAE",
                      }}
                    >
                      Hello welcome to your garden
                    </Typography>
                  </Grid.Column>
                  </Grid>
                  </Box>
       </Segment>
       </div>
    )
}