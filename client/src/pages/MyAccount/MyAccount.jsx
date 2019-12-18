import React from 'react';

import { Grid, Divider, Header, Icon, Table, Button, Image, Item } from 'semantic-ui-react';

import {
  UserTitleWrapper,
  UserInfoWrapper,
  ViewedProductsWrapper,
  OrdersWrapper
} from './MyAccountStyle';

export default function MyAccount() {
  return (
    <React.Fragment>
      <UserTitleWrapper>
        <Divider horizontal>
          <Header as="h1">
            <Icon name="user outline" />
            My Account
          </Header>
        </Divider>
      </UserTitleWrapper>

      <Divider horizontal>
        <Header as="h4">
          <Icon name="info circle" />
          User Information
        </Header>
      </Divider>

      <UserInfoWrapper>
        <Table definition>
          <Table.Body>
            <Table.Row>
              <Table.Cell width={8}>FirstName</Table.Cell>
              <Table.Cell>FirstName</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>LastName</Table.Cell>
              <Table.Cell>LastName</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Login</Table.Cell>
              <Table.Cell>Login</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Email</Table.Cell>
              <Table.Cell>Email</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Telephone</Table.Cell>
              <Table.Cell>Telephone</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Gender</Table.Cell>
              <Table.Cell>Gender</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </UserInfoWrapper>

      <Divider horizontal>
        <Header as="h4">
          <Icon name="eye" />
          Last Viewed Products
        </Header>
      </Divider>
      <ViewedProductsWrapper>
        <Grid doubling columns={5}>
          <Grid.Column>
            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </Grid.Column>
        </Grid>
      </ViewedProductsWrapper>

      <Divider horizontal>
        <Header as="h4">
          <Icon name="dolly" />
          Your orders
        </Header>
      </Divider>
      <OrdersWrapper>
        <Item.Group devided>
          <Item>
            <Item.Image src="https://react.semantic-ui.com/images/wireframe/image.png" />

            <Item.Content>
              <Item.Header as="a">MotoHelmet</Item.Header>
              <Item.Meta>
                <span className="cinema">moto</span>
              </Item.Meta>
              <Item.Description>
                <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
              </Item.Description>
              <Item.Extra>
                <Button primary floated="right">
                  Check Info
                  <Icon name="right chevron" />
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </OrdersWrapper>
    </React.Fragment>
  );
}
