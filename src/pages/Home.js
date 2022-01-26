import React, { useState, useEffect } from "react";
import "./styles/home.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "50%",
  maxHeight: "50%",
  borderRadius: "10px",
});

export default function Home() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [profilepicture, setProfilepicture] = useState("");
  const [bio, setBio] = useState("");
  const [following, setFollowing] = useState("");
  const [followers, setFollowers] = useState("");
  const [repos, setRepos] = useState("");
  const [gists, setGists] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/users/AlexisGonzalez07`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // (setData(data))
  const setData = ({
    name,
    login,
    avatar_url,
    bio,
    following,
    followers,
    public_gists,
    public_repos,
  }) => {
    setName(name);
    setUsername(login);
    setProfilepicture(avatar_url);
    setBio(bio);
    setFollowing(following);
    setFollowers(followers);
    setRepos(public_repos);
    setGists(public_gists);
  };

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
                After years of learning modeling and optimization in Excel, I
                knew I had a great understanding of how to organize, manipulate,
                and analyze data. I always had an interest for coding and web
                design, so last year I decided to learn the skillset necessary
                in order to become a web developer. I've put in the work, and
                I'm currently looking for full-time opportunities as a full
                stack web developer. I strive to deliver great user experiences
                in all my applications, which is why I take pride in the fact
                that I meticulously think about my code and application
                structure before I type a single line of code. I have a great
                understanding of the Model-View-Controller (MVC) software design
                pattern, and I leverage that knowledge to create organized,
                well-structured applications that are easy for other coders to
                dissect. This style of programming has enabled me to become a
                great collaborator, and it's a skill that I continue to work on
                and improve daily.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
