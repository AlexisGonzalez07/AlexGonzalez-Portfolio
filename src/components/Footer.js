import React from "react";

import {
  Container,
  Grid,
  Header,
  List,
  Segment,
} from "semantic-ui-react";

function Footer() {
  return (
    <>
      <Segment
        inverted
        vertical
        style={{ margin: "0em 0em 0em", padding: "0em 0em" }}
      >
        <Container textAlign="center">
          <Grid divided inverted stackable>
            <Grid.Column width={16}>
              <Header inverted as="h4" content="Stay Connected" />
              <List horizontal>
                <List.Item
                  icon="linkedin"
                  content={
                    <a
                      style={{ color: "white", marginTop: "10px" }}
                      href="https://www.linkedin.com/in/alexis-gonzalez-07/"
                    >
                      LinkedIn Profile
                    </a>
                  }
                />
                  <List.Item
                    icon="github"
                    content={
                      <a
                        style={{ color: "white", marginTop: "10px" }}
                        href="https://github.com/AlexisGonzalez07"
                      >
                        My Github
                      </a>
                    }
                  />
                <List.Item style={{ color: "white", marginTop: "10px" }} icon="marker" content="Houston, TX" />
                <List.Item
                  icon="mail"
                  content={
                      <a
                      style={{ color: "white", marginTop: "10px" }}
                      href="alexis.gonzalez07@gmail.com"
                      >
                      alexis.gonzalez07@gmail.com
                    </a>
                  }
                  />
                  </List>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    </>
  );
}

export default Footer;
