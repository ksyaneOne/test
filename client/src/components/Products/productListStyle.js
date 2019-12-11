import styled from '@emotion/styled';

const ImageConteiner = styled.div`
  position: relative;
  overflow: hidden;
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

export default ImageConteiner;
