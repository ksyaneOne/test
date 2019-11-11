import React from 'react';

import { Grid, Segment, GridColumn, Sticky } from 'semantic-ui-react';

import HeaderLogo from './HeaderLogo';
import HeaderSearch from './HeaderSearch';

import HeaderCart from './HeaderCart';
import HeaderAccount from './HeaderAccount';
import HeaderNav from './HeaderNav';

function Header(props) {
  return (
    <Sticky>
      <Grid columns="equal" inverted textAlign="center" verticalAlign="middle">
        <Grid.Row color="black" textAlign="center">
          <Grid.Column width="3">
            <Segment color="black" inverted>
              <HeaderLogo />
            </Segment>
          </Grid.Column>
          <Grid.Column width="5">
            <Segment color="black" inverted>
              <HeaderSearch />
            </Segment>
          </Grid.Column>
          <GridColumn width="3">
            <Segment color="black" inverted textAlign="right">
              <HeaderAccount />
            </Segment>
          </GridColumn>
          <GridColumn width="3">
            <Segment color="black" inverted textAlign="left">
              <HeaderCart />
            </Segment>
          </GridColumn>
        </Grid.Row>
        <Grid.Row color="black">
          <HeaderNav />
        </Grid.Row>
      </Grid>
    </Sticky>
  );
}

export default Header;
