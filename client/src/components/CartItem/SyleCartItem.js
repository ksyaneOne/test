import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #000000;
  margin-bottom: 22px;
`;
export const Img = styled.img`
  width: 222px;
  height: 187px;
`;
export const ItemParams = styled.div``;
export const TitelItem = styled.h3`
  color: #000000;
  font-size: 22px;
  font-weight: 700;
`;
export const Param = styled.p`
  color: #a0a0a0;
  font-size: 16px;
  line-height: 22px;
`;
export const TotalPrice = styled.p`
  color: #000000;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
`;
export const DeleteItem = styled.button`
  align-self: flex-end;
`;
export const Operator = styled.span`
  padding: 5px;
  cursor: pointer;
  color: #000000;
  font-size: 18px;
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
