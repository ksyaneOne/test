import styled from "@emotion/styled";

export const ImageContainer = styled.div`
  position: relative;
  overflow: hiden;
  height: 240px;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 200px;
    object-fit: cover;
    transform: translate(-50%, -50%);
  }
`;

export const BlackLine = styled.div`
  display: inline-block;
  height: 5px;
  width: 240px;
  border-radius: 2px;
  background-color: black;
`;
