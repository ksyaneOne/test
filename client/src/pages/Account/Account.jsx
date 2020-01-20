import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { Redirect } from "react-router-dom";
import onReg from "../../actions/onAuthorization";
import UserInfo from "../../components/UserInfo";

import { Grid, Divider, Header, Image, Button } from "semantic-ui-react";

import {
  UserTitleWrapper,
  ViewedProductsWrapper,
  Container,
  HeaderTitle,
  MediumTitle,
  ButtonWrapper,
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
    redirect: false,
  };
  const [state, setState] = useState(initialState);
  let info = 0;

  const { error } = state;
  const auth = Cookies.get("token");
  useEffect(() => {
    if (auth) {
      const fetchData = async () => {
        const result = await axios("customers/customer", {
          params: {},
          headers: { Authorization: auth },
        });
        setState(result.data);
      };
      fetchData();
    }
  }, []);
  const setRedirect = () => {
    setState({
      redirect: true,
    });
  };
  const renderRedirect = () => {
    if (state.redirect) {
      return <Redirect to="/" />;
    }
  };
  const handleLogOut = () => {
    Cookies.remove("token");
    setRedirect();
  };
  const refreshPage = () => {
    window.location.reload(false);
  };

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


      <ButtonWrapper>
        <Button inverted color="red" onClick={handleLogOut}>
          LogOut
        </Button>
        {renderRedirect()}
      </ButtonWrapper>

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
