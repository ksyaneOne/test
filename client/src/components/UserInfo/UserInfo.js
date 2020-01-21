import React from "react";

import { Table } from "semantic-ui-react";

import { UserInfoWrapper } from "./StyleUserInfo";

export default function Account({ props }) {
  return (
    <UserInfoWrapper>
      <Table definition>
        <Table.Body>
          <Table.Row>
            <Table.Cell width={8}>FirstName</Table.Cell>
            <Table.Cell>{props.firstName}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>LastName</Table.Cell>
            <Table.Cell>{props.lastName}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Login</Table.Cell>
            <Table.Cell>{props.login}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Email</Table.Cell>
            <Table.Cell>{props.email}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Telephone</Table.Cell>
            <Table.Cell>{props.telephone}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Gender</Table.Cell>
            <Table.Cell>{props.gender}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </UserInfoWrapper>
  );
}
