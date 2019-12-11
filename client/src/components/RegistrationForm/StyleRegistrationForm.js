import styled from '@emotion/styled';
import { Button } from 'semantic-ui-react';

export const ButtonIn = styled(Button)`
  margin: 0 auto;
`;

export const Label = styled.label`
  color: #fff;
  display: block;
`;
export const Div = styled.div`
  text-align: center;
`;
export const Err = styled.p`
  color: red;
  visibility: ${ props => !props.error ?  "hidden" : "visible" };
`;
