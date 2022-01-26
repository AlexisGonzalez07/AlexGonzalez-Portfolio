import React from "react";

import { Container, Grid, Header, List, Segment } from "semantic-ui-react";

function Footer() {
  return (
    <Segment
      inverted
      vertical
      style={{
        margin: "5em 0em 0em",
        padding: "0em 0em",
        paddingTop: '15px',
        textAlign: "center",
        backgroundColor: "black",
        borderTop: '1px #77B9F2 dashed'

      }}
    >
      <Container textAlign="center">
        <Grid divided inverted stackable>
          <Grid.Column width={16}>
            <Header inverted as="h2" content="Stay Connected" />
          </Grid.Column>
        </Grid>

        <Grid divided inverted columns="equal">
          <Grid.Column>
            <List style={{ textAlign: "center" }} horizontal>
              <List.Item
                icon="linkedin"
                content={
                  <a
                    style={{ color: "white" }}
                    href="https://www.linkedin.com/in/alexis-gonzalez-07/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <br></br>
                    <p
                      style={{
                        color: "white",
                        textAlign: "center",
                        fontSize: "150%",
                      }}
                    >
                      LinkedIn
                    </p>
                  </a>
                }
              />
            </List>
          </Grid.Column>

          <Grid.Column>
            <List style={{ textAlign: "center" }} horizontal>
              <List.Item
                icon="github"
                content={
                  <a
                    style={{ color: "white" }}
                    href="https://github.com/AlexisGonzalez07"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <br></br>
                    <p
                      style={{
                        color: "white",
                        textAlign: "center",
                        fontSize: "150%",
                      }}
                    >
                      Github
                    </p>
                  </a>
                }
              />
            </List>
          </Grid.Column>

          <Grid.Column>
            <List style={{ textAlign: "center" }} horizontal>
              <List.Item
                icon="mail"
                content={
                  <a
                    style={{ color: "white" }}
                    href="mailto:alexis.gonzalez07@gmail.com"
                  >
                    <br></br>
                    <p style={{ color: "white", textAlign: "center", fontSize: '150%' }}>
                      Email</p>
                  </a>
                }
              />
            </List>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  );
}

export default Footer;
