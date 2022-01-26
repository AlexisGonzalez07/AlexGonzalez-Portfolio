import { Button, Icon, Grid, List } from "semantic-ui-react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
// import companynight from './images/CompanyNight.jpeg'
// import 'semantic-ui-css/semantic.min.css';

export default function ProjectCards({ projects }) {
  return (
    <div style={{ backgroundColor: "#EBDBAE" }}>
      <div className="garden-container">
        <br></br>
        <div style={{ width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              p: 2,
              m: 1,
            }}
          >
            <Grid stackable columns={1} width={12}>
              <Grid.Column textAlign="center" width={16}>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  style={{
                    textAlign: "center",
                    fontFamily: "Fuzzy Bubbles, cursive",
                    color: "black",
                  }}
                >
                  View My Projects
                </Typography>
                {/* <List link inverted>
                            <List.Item as='a'>FAQs</List.Item>
                            <List.Item as='a'>Privacy</List.Item>
                            <List.Item as='a'>Careers</List.Item>
                            <List.Item as='a'>Help Center</List.Item>
                        </List> */}
              </Grid.Column>
              {/* <Grid.Row width={12}> */}
              {/* <Grid.Column textAlign="center" width={16}> */}
              {/* <Grid align='center' inverted stackable columns={2}> */}
              {projects.map((work, i) => (
                <Grid.Column
                  textAlign="center"
                  mobile={16}
                  tablet={8}
                  computer={3}
                >
                  <Card
                    key={i}
                    id="plant-card"
                    sx={{ maxWidth: 345, margin: 1, bgcolor: "#EBDBAE" }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image={work.src}
                        alt={work.name}
                        style={{ backgroundColor: "#4f5902" }}
                      />
                      <CardContent style={{ backgroundColor: "#949596" }}>
                        <Typography
                          gutterBottom
                          variant="h4"
                          component="div"
                          style={{
                            textAlign: "center",
                            fontFamily: "Fuzzy Bubbles, cursive",
                            color: "white",
                          }}
                        >
                          {work.title}
                        </Typography>
                        <List>
                          <List.Item>
                            {" "}
                            <Typography variant="body1" color="white">
                              {work.description}
                            </Typography>
                          </List.Item>
                          <List.Item>
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href={work.website}
                            >
                              <Button
                                className="removegardenbtn"
                                icon
                                labelPosition="left"
                                primary
                                size="small"
                                style={{
                                  backgroundColor: "#4f5902",
                                  marginTop: "10px",
                                }}
                                // onClick={async () => {
                                //     await handleDeletePlant(plant._id)
                                //     await refetch()
                                // }}
                              >
                                <Icon name="circle" />
                                <Typography variant="body1" color="white">
                                  View Website
                                </Typography>
                              </Button>
                            </a>
                          </List.Item>
                          <List.Item>
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href={work.repo}
                            >
                              <Button
                                className="removegardenbtn"
                                icon
                                labelPosition="left"
                                primary
                                size="small"
                                style={{
                                  backgroundColor: "#4f5902",
                                  marginTop: "10px",
                                }}
                                // onClick={async () => {
                                //     await handleDeletePlant(plant._id)
                                //     await refetch()
                                // }}
                              >
                                <Icon name="circle" />
                                <Typography variant="body1" color="white">
                                  View Repository
                                </Typography>
                              </Button>
                            </a>
                          </List.Item>
                        </List>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid.Column>
                //   </div>
              ))}
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
}
