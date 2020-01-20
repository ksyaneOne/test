import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import onReg from "../../actions/onAuthorization";
import UserInfo from "../../components/UserInfo";

import { Grid, Divider, Header, Image } from "semantic-ui-react";

import {
  UserTitleWrapper,
  ViewedProductsWrapper,
  Container,
  HeaderTitle,
  MediumTitle,
} from "./AccountStyle";

export default function Account() {
  const initialState = {
    firstName: "Steve",
    lastName: "Jobs",
    login: "applejobs",
    email: "applejobs@apple.com",
    telephone: "+10504864",
    gender: "male",
    customerNo: "12313",
    error: false,
  };
  const [state, setState] = useState(initialState);
  let info = 0;

  const { error } = state;
  const auth = Cookies.get("token");
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("customers/customer", {
        params: {},
        headers: { Authorization: auth },
      });
      setState(result.data);
    };
    fetchData();
  }, []);
  return (
    <Container>
      <UserTitleWrapper>
        <Divider horizontal>
          <Header as="h1">
            <HeaderTitle>My Account</HeaderTitle>
          </Header>
        </Divider>
      </UserTitleWrapper>

      <Divider horizontal>
        <Header as="h4">
          <MediumTitle>User Information</MediumTitle>
        </Header>
      </Divider>

      <UserInfo props={state} />

      <Divider horizontal>
        <Header as="h4">
          <MediumTitle>Last Viewed Products</MediumTitle>
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
    </Container>
  );
}
