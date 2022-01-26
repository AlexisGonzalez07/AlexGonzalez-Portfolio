import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Container } from "semantic-ui-react";

import Button from "@mui/material/Button";
import "./styles/projectCard.css";

import {
  FiCard,
  // FiCardActionArea,
  FiCardActions,
  FiCardContent,
  FiCardMedia,
} from "../components/FullImageCard";

// --- Style --- //
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // Here is where I changed title and content location
    justifyContent: "left",
  },
  /**
   * Max Card with for demo
   * same values used in Material-Ui Card Demos
   */
  card: {
    maxWidth: 345,
    borderRadius: 15,
  },

  /**
   * Applied to Orginal Card demo
   * Same vale used in Material-ui Card Demos
   */
  media: {
    height: 100,
  },

  /**
   * Demo stlying to inclrease text visibility
   * May verry on implementation
   */
  fiCardContent: {
    color: "white",
    backgroundColor: "rgba(0,0,0,.24)",
    border: "2px",
    alignContent: "center",
    padding: 0,
  },
  fiCardActions: {
    color: "white",
    backgroundColor: "rgba(0,0,0,.24)",
    border: "2px",
    justifyContent: "space-between",
    padding: 0,
  },
  fiCardContentTextSecondary: {
    color: "white",
  },
});

export default function NewProjectCards({ projects }) {
  const classes = useStyles();

  return (
    <Container textAlign="center">
      <Box
        style={{
          backgroundColor: "black",
          minHeight: "70vh",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          p: 2,
          m: 1,
        }}
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
          columnSpacing={{ xs: 1, sm: 2, md: 2 }}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} justifyContent="center">
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              style={{
                textAlign: "center",
                fontFamily: "Monospace, sans-serif",
                color: "white",
                letterSpacing: "10",
                fontWeight: "bold",
              }}
            >
              MY PROJECTS
            </Typography>
          </Grid>
          {projects.map((work, i) => (
            <Grid justifyContent="center" item xs={12} sm={6} md={4}>
              <Box my={2} justifyContent="center">
                <FiCard className={classes.card}>
                  <FiCardMedia
                    media="picture"
                    alt="Contemplative Reptile"
                    image={work.src}
                    title="Contemplative Reptile"
                  />
                  <FiCardContent className={classes.fiCardContent}>
                    <div className="card-title">
                      <Typography
                        style={{
                          color: "white",
                          display: "inline-flex",
                          border: "black dashed .2px",
                          textAlign: "left",
                          backgroundColor: "black",
                          opacity: "70%",
                        }}
                        gutterBottom
                        variant="h4"
                        component="div"
                      >
                        {work.title}
                      </Typography>
                      <br></br>
                      <Typography
                        style={{
                          color: "white",
                          display: "inline-flex",
                          border: "black dashed .2px",
                          textAlign: "left",
                          backgroundColor: "black",
                          opacity: "70%",
                        }}
                        variant="body2"
                        className={classes.fiCardContentTextSecondary}
                        component="div"
                      >
                        {work.description}
                      </Typography>
                    </div>
                  </FiCardContent>
                  <FiCardActions className={classes.fiCardContent}>
                    <a
                      class="card-button"
                      id="left-button"
                      target="_blank"
                      rel="noreferrer"
                      href={work.website}
                    >
                      <Button
                        size="large"
                        variant="contained"
                        style={{ color: "white" }}
                      >
                        App
                      </Button>
                    </a>
                    <a
                      class="card-button"
                      id="right-button"
                      target="_blank"
                      rel="noreferrer"
                      href={work.repo}
                    >
                      <Button
                        size="large"
                        variant="contained"
                        style={{ color: "white" }}
                      >
                        Repo
                      </Button>
                    </a>
                  </FiCardActions>
                </FiCard>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
