import React from "react";

import { Grid, List, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";


import { FooterStyle, FooterTitle } from "./FooterStyle";

const Footer = () => {
  return (
    <FooterStyle>
      <Grid textAlign="center" columns={3}>
        <Grid.Row>
          <Grid.Column>
            <FooterTitle>HELP</FooterTitle>
            <Divider />
            <Grid textAlign="center" columns={3}>
              <Grid.Row>
                <Grid.Column>
                  <List>
                    <List.Item as={Link} to="/Help">
                      FAQ
                    </List.Item>
                    <List.Item as={Link} to="/Help">
                      Contact
                    </List.Item>
                    <List.Item as={Link} to="/Help">
                      Payment
                    </List.Item>
                    <List.Item as={Link} to="/Cart">
                      Purchase
                    </List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
          <Grid.Column>
            <FooterTitle>FOLLOW US</FooterTitle>
            <Divider />
            <Grid textAlign="center" columns={3}>
              <Grid.Row>
                <Grid.Column>
                  <List>
                    <List.Item as={Link} to="/">
                      Facebook
                    </List.Item>
                    <List.Item as={Link} to="/">
                      Instagram
                    </List.Item>
                    <List.Item as={Link} to="/">
                      Twitter
                    </List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
          <Grid.Column>
            <FooterTitle>COMPANY</FooterTitle>
            <Divider />
            <Grid textAlign="center" columns={3}>
              <Grid.Row>
                <Grid.Column>
                  <List>
                    <List.Item as={Link} to="/AboutCompany">
                      History
                    </List.Item>
                    <List.Item as={Link} to="/AboutCompany">
                      Policy
                    </List.Item>
                    <List.Item as={Link} to="/AboutCompany">
                      Work with us
                    </List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </FooterStyle>
  );
};

export default Footer;
