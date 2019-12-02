import styled from '@emotion/styled';
import { Card } from 'semantic-ui-react';

export const ProductName = styled(Card.Header)`
   {
    margin: 15px;
    color: #000;
    font-family: 'Roboto', sans-serif;
    text-transform: capitalize;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const ProductPrices = styled.div`
   {
     margin-bottom:15px;
    & .sale span {  
      margin: 0 15px;
      box-sizing: border-box;
      font-family: Roboto,Helvetica,Arial,sans-serif;
      background-color: red;
      position: relative;
      padding: 1px 4px 2px;
      border-radius: 5px;
      font-size: 12px;
      font-weight: 700;
      color: #fff;
      background: red;
    }

    .prices {
      margin: 0 15px 0 0;
      display: flex;
      font-family: 'Roboto', sans-serif;
      }
      & .prices-old {
        margin: 0 10px;
        position: relative;
        & .price {
          font-size: 16px;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.54);
          &:after {
            content: '';
            position: absolute;
            left: -6%;
            top: 45%;
            width: 115%;
            border-bottom: 1px solid rgba(0, 0, 0, 0.22);
          }
        }
      }

      & .prices-current {
        position: relative;
        & .price,
        & .curency {
          font-size: 21px;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.87);
        }
      }
    }
  }
`;

export const CardWrapper = styled.div`
box-sizing: border-box;
  margin: 10px;
  transition all 0.3s ease; 
  &:hover {
    box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.75);
    & .button-like{
      i {
        font-size: 20px;
      }
    }
    & .button-buy{
     {
      
       span, i{transition all 0.3s ease; 
         font-size:16px;
        color:#ffffff;
       }
        background-color: #f6731c;
        border-radius: 3px;
        cursor:pointer;
      }
    }
  }
`;

export const ButtonsGrop = styled.div`
   {
    .buttons-grop {
      display: flex;
      justify-content: space-around;
      & .button-buy {
        color: #f6731c;
        padding: 5px 10px;
      }
      .button-like {
        i {
          color: #cc66ff;
          padding: 5px 0;
        }
      }
    }
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

