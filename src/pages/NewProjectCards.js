import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@material-ui/core/CardActions";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIosSharp";
// import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

import {
    FiCard,
    FiCardActionArea,
    FiCardActions,
    FiCardContent,
    FiCardMedia
  } from "../components/FullImageCard";
  
  // --- Style --- //
  const useStyles = makeStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },
    /**
     * Max Card with for demo
     * same values used in Material-Ui Card Demos
     */
    card: {
      maxWidth: 345
    },
  
    /**
     * Applied to Orginal Card demo
     * Same vale used in Material-ui Card Demos
     */
    media: {
      height: 140
    },
  
    /**
     * Demo stlying to inclrease text visibility
     * May verry on implementation
     */
    fiCardContent: {
      color: "#ffffff",
      backgroundColor: "rgba(0,0,0,.24)"
    },
    fiCardContentTextSecondary: {
      color: "rgba(255,255,255,0.78)"
    }
  });
  
  
export default function NewProjectCards({ projects }) {
    const classes = useStyles();

  return (
    <Box
      style={{ backgroundColor: "black", minHeight: "60vh" }}
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
        <Grid item xs={12} justifyContent='center'>
          My Projects
        </Grid>
        {projects.map((work, i) => (
          <Grid justifyContent="center" item xs={12} md={4}>
            <Box my={4}>
        <Typography variant="h6" paragraph align="center">
          Full Image Card with Action Buttons
        </Typography>
        <FiCard className={classes.card}>
          <FiCardMedia
            media="picture"
            alt="Contemplative Reptile"
            image="/material-ui-lizard.jpg"
            title="Contemplative Reptile"
          />
          <FiCardContent className={classes.fiCardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography
              variant="body2"
              className={classes.fiCardContentTextSecondary}
              component="p"
            >
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </FiCardContent>
          <FiCardActions className={classes.fiCardContent}>
            <Button size="small" color="inherit" variant="outlined">
              Share
            </Button>
            <Button size="small" color="inherit" variant="outlined">
              Learn More
            </Button>
          </FiCardActions>
        </FiCard>
      </Box>
          </Grid>
        ))}

      </Grid>
    </Box>
  );
}
