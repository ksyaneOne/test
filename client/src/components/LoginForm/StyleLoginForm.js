import styled from '@emotion/styled';

export const Span = styled.span`
  color: #fff;
  margin-left: 8px;
`;

export const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;

`;
export const Div = styled.div`
  display: flex;
`;
export const Label = styled.label`
   display:flex;
   aline-item:center;
   margin-top:10px;
   width:100%
}
`;
export const Err = styled.span`
width:100%;
color:red;
align-text:left;
  visibility: ${ props => !props.error ?  "hidden" : "visible" };
`;
