import styled from '@emotion/styled';

export const HeaderCartTitle = styled.div`
  display: inline-block;
  @media (max-width: 920px) {
    display: none;
  }
`;

export const HeaderCartCount = styled.div`
  position: absolute;
  left: -0.1rem;
  top: -0.1rem;
  background-color: rgba(255, 193, 7, 0.8);
  border-radius: 50%;
  padding: 0.2em 0.7em;
`;

export const HeaderCartIcon = styled.div`
  position: relative;
`;
