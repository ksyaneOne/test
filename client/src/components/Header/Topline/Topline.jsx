import React, { Component } from "react";
import styled from "@emotion/styled";
import { Menu, Icon } from "semantic-ui-react";
import "./Topline.css";

export default class Topline extends Component {
  render() {
    const ToplineWrapper = styled.div`
      width: 100%;
      background-color: #263238;
      color: #fff;
    `;
    return (
      <ToplineWrapper>
        <Menu secondary>
          <Menu.Item className="ToplineItem">Оплата и доставка</Menu.Item>
          <Menu.Item className="ToplineItem">Контакты</Menu.Item>
          <Menu.Item className="ToplineItem">Отзывы</Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item position="right" className="ToplineItem">
              <Icon name="facebook" size="large" title="facebook" />
              facebook
            </Menu.Item>
            <Menu.Item position="right" className="ToplineItem">
              <Icon name="instagram" size="large" title="instagram" />
              instagram
            </Menu.Item>
            <Menu.Item position="right" className="ToplineItem">
              <Icon name="youtube" size="large" title="youtube" />
              youtube
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </ToplineWrapper>
    );
  }
}
