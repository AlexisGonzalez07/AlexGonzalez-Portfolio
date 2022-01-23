import React, { useState, useEffect } from "react";
import "./styles/home.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "80%",
  maxHeight: "80%",
  borderRadius: "60px",
});

export default function Home() {
const [name, setName] = useState('');
const [username, setUsername] = useState('');
const [profilepicture, setProfilepicture] = useState('');
const [bio, setBio] = useState('');
const [following, setFollowing] = useState('');
const [followers, setFollowers] = useState('');
const [repos, setRepos] = useState('');
const [gists, setGists] = useState('')

  useEffect(() => {
    fetch(`https://api.github.com/users/AlexisGonzalez07`)
      .then((res) => res.json())
      .then((data) => (setData(data)));
  },[]);

  // (setData(data))
  const setData= ({name, login, avatar_url, bio, following, followers, public_gists, public_repos  }) => {
    setName(name);
    setUsername(login)
    setProfilepicture(avatar_url)
    setBio(bio)
    setFollowing(following)
    setFollowers(followers)
    setRepos(public_repos)
    setGists(public_gists)
  }

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
                GitHub
              </h1>
              <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          borderRadius='150px'
          image={profilepicture}
          alt="green iguana"
        />
        <CardContent id='github-card'>
          <Typography gutterBottom variant="h5" component="div">
            {username}
          </Typography>
          <Typography variant="body2" color="white">
           Biography: {bio}
          </Typography>
          <Typography variant="body2" color="white">
           {following} following
          </Typography>
          <Typography variant="body2" color="white">
           {followers} followers
          </Typography>
          <Typography variant="body2" color="white">
           {repos} public repos
          </Typography>
          <Typography variant="body2" color="white">
           {gists} public gists
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
