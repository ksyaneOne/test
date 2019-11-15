import styled from '@emotion/styled';

export const FooterStyle = styled.div`
  background-color: #000;
  color: #fff;
  padding: 2rem 0 2rem 0;
  & a {
    color: #fff !important;
    margin: 1rem 0;
    transition: all 0.35s ease;
  }
  & a:hover {
    color: rgba(255, 193, 7, 0.8) !important;
  }
`;

export const FooterTitle = styled.h4`
  font-weight: bold;
`;
