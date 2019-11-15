import React, { Component } from 'react';

import { Grid, List, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { FooterStyle, FooterTitle } from './FooterStyle';

class Footer extends Component {
  render() {
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
                      <List.Item as={Link} to="/">
                        FAQ
                      </List.Item>
                      <List.Item as={Link} to="/">
                        Contact
                      </List.Item>
                      <List.Item as={Link} to="/">
                        Payment
                      </List.Item>
                      <List.Item as={Link} to="/">
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
                      <List.Item as={Link} to="/">
                        History
                      </List.Item>
                      <List.Item as={Link} to="/">
                        Policy
                      </List.Item>
                      <List.Item as={Link} to="/">
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
  }
}

export default Footer;
