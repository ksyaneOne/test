import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 28px 0;
  width: 40%;
  background: #000000;
  text-align: center;
  width: 362px;
  height: 442px;
  align-self: start;
`;
export const Title = styled.p`
  padding: 0 45px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 42px;
  text-transform: uppercase;
`;
export const Content = styled.div`
  height: 100%;
  padding: 0 45px;
  border-top: 1px solid #808080;
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
`;
export const OrderValue = styled.p`
  display: flex;
  justify-content: space-between;
`;

export const Delivery = styled.p`
  display: flex;
  justify-content: space-between;
`;
export const Total = styled.p`
  font-weight: 700;
  line-height: 42px;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  font-size: 16px;
`;
export const Button = styled.button`
  margin-top: 100px;
  padding: 22px 60px;
  background: #fff;
  &:hover {
    background: #808080;
    color: #fff;
  }
`;
