import React, { Component } from 'react';

import { Grid, Segment, GridColumn, Menu, Transition } from 'semantic-ui-react';

import HeaderLogo from './HeaderLogo';
import HeaderSearch from './HeaderSearch';
import HeaderCategories from './HeaderCategories';
import HeaderCart from './HeaderCart';
import HeaderAccount from './HeaderAccount';
import HeaderNav from './HeaderNav';

import HeaderWrapper from './style';

export default class Header extends Component {
  state = { visible: false };

  toggleVisibility = () => this.setState(prevState => ({ visible: !prevState.visible }));

  render() {
    const { visible } = this.state;
    return (
      <HeaderWrapper>
        <Grid columns="equal" inverted textAlign="center" verticalAlign="middle">
          <Grid.Row color="black" textAlign="center">
            <Grid.Column width="2">
              <Segment color="black" inverted>
                <HeaderLogo />
              </Segment>
            </Grid.Column>
            <Grid.Column width="6">
              <Segment color="black" inverted>
                <HeaderSearch />
              </Segment>
            </Grid.Column>
            <GridColumn width="6">
              <Segment color="black" inverted>
                <Menu horisontal="true" inverted borderless>
                  <Menu.Item
                    position="right"
                    content={visible ? 'Hide' : 'Show'}
                    onClick={this.toggleVisibility}
                  >
                    <HeaderCategories />
                  </Menu.Item>
                  <Menu.Item position="right">
                    <HeaderAccount />
                  </Menu.Item>
                  <Menu.Item position="right">
                    <HeaderCart />
                  </Menu.Item>
                </Menu>
              </Segment>
            </GridColumn>
          </Grid.Row>
        </Grid>
        <Transition visible={visible} animation="fade down" duration={300}>
          <Grid.Row color="black">
            <HeaderNav />
          </Grid.Row>
        </Transition>
      </HeaderWrapper>
    );
  }
}
