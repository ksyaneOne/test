import styled from "@emotion/styled";

export const ProductDetailStyles = styled.div`
  margin: 4em 2em;
  width: 80%;
  @media (max-width: 1024px) {
    margin: 0;
    width: 100%;
  }
`;

export const ProductHeaderName = styled.h2`
  text-transform: capitalize;
  margin-bottom: 0;
  @media (max-width: 1024px) {
    padding: 0 0 0 1em;
  }
`;

export const ProductArticle = styled.div`
  text-transform: capitalize;
  color: #bdbdbd !important;
  display: block;
  @media (max-width: 1024px) {
    padding: 0 0 0 1em;
  }
`;
export const ProductPrice = styled.h2`
  font-weight: bold;
  text-align: right;
  color: #21ba45;
  @media (max-width: 1024px) {
    padding: 0 1em 0 0;
  }
`;
export const ProductColorHeader = styled.h2`
  text-transform: capitalize;
  margin: 0 !important;
  @media (max-width: 1024px) {
    padding: 0 0 0 1em;
  }
`;
export const ProductColor = styled.div`
  text-align: center;
  padding: 1em 0;
`;
export const ProductColorCircle = styled.span`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  border: 1px solid #bdbdbd;
  display: inline-block;
`;
export const ProductColorName = styled.h4`
  text-transform: capitalize;
  margin-top: 0;
  position: relative;
`;
export const ProductSizeHeader = styled.h2`
  padding: 0 0 1em 0;
  text-transform: capitalize;
  @media (max-width: 1024px) {
    padding: 0 0 0 1em;
  }
`;
export const ProductOneSize = styled.div`
  text-transform: uppercase;
  text-align: left;
  display: inline-block;
  font-weight: bold;
  margin: 0 1em 0 1em;
  @media (max-width: 1024px) {
    padding: 1em 0 0 2em;
  }
`;
export const ProductDetailsHeader = styled.h2`
  padding: 1em 0 1em 0;
  text-transform: capitalize;
  @media (max-width: 1024px) {
    padding: 0 0 0 1em;
  }
`;
export const ProductDetailsDesc = styled.p`
  @media (max-width: 1024px) {
    padding: 0 0 0 1em;
  }
`;
export const ProductButtons = styled.div`
  @media (max-width: 1024px) {
    width: 100% !important;
    padding: 2em 0 2em 2em;
    text-align: center;
  }
`;
export const ProductButton = styled.button`
  background-color: #f6731c;
  text-transform: capitalize;
  margin: 4em 0 0 2em;
  font-weight: bold;
  padding: 5px 20px;
  border-radius: 5px;
  color: #fff;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.35s ease;
  &:hover {
    background-color: #21ba45;
  }
  @media (max-width: 1024px) {
    margin: 0 2em 0 0;
    font-size: 24px;
  }
`;
export const ImageWrapper = styled.div`
  position: relative;
  overflow: hiden;
  height: 500px;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 300px;
    max-height: 500px;
    object-fit: cover;
    transform: translate(-50%, -50%);
  }
`;
export const carouselSettings = {
  additionalTransfrom: 0,
  arrows: true,
  autoPlaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "",
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: false,
  renderDotsOutside: false,
  responsive: {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 1,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 1,
    },
  },
  showDots: true,
  sliderClass: "",
  slidesToSlide: 1,
  swipeable: true,
};
