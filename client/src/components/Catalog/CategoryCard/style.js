import styled from '@emotion/styled';

export const CardWrapper = styled.div`
  margin: 10px;
  transition all 0.3s ease; 
  &:hover {
    margin: 5px;
    box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.75);
  }
`;

export const CardHeader = styled.div`
   {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 600;
    text-transform: capitalize;
    text-align: center;
    color: #000;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hiden;
  height: 240px;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    object-fit: cover;
    transform: translate(-50%, -50%);
  }
`;
