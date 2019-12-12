import styled from '@emotion/styled';

export const ProductDetailStyles = styled.div`
    margin: 4em 2em;
`;

export const ProductHeaderName = styled.h2`
    text-transform: capitalize;
    margin-bottom: 0;
`;

export const ProductArticle = styled.div`
    text-transform: capitalize;
    color: #BDBDBD !important;
    display: block;
`;
export const ProductPrice = styled.h2`
    font-weight: bold;
    text-align: right;
    color: #21ba45;
`;
export const ProductColorHeader = styled.h2`
    text-transform: capitalize;
    margin: 0 !important;
`;
export const ProductColor = styled.div`
    text-align: center;
    padding: 1em 0 ;
`;
export const ProductColorCircle = styled.span`
    height: 10px;
    width: 10px;
    border-radius: 50%;
    border: 1px solid #BDBDBD;
    display: inline-block;
`;
export const ProductColorName = styled.h4`
    text-transform: capitalize;
    margin-top: 0;
    position: relative;
`;
export const ProductSizeHeader = styled.h2`
    padding: 0 0 1em 0 ;
    text-transform: capitalize;
`;
export const ProductOneSize = styled.div`
    text-transform: uppercase;
    text-align: center;
    display: inline-block;
    font-weight: bold;
    margin: 0 1em 0 0;
`;
export const ProductDetailsHeader = styled.h2`
    padding: 1em 0 1em 0;
    text-transform: capitalize;
`;
export const ProductDetailsDesc = styled.p`
`;
export const ProductButton = styled.button`
    background-color: #f6731c;
    text-transform: capitalize;
    font-weight: bold;
    margin: 4em 1em 0 0;
    padding: 5px 20px;
    border-radius: 5px;
    color: #fff;
    box-shadow: 2px 2px 2px rgba(0,0,0, .1);
    transition: all .35s ease;
    &:hover{
        background-color: #21ba45;
    }
`;
export const MainImageStyle = styled.div`
    text-align: center;
    margin: 0 auto;
    height: 400px;
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center !important;
    img{
        margin: 0 auto !important;
        height: 100%;
        max-height: 100%;
        cursor: pointer;
        transition: all 1s ease !important;
    }
`;

export const ImagesGroup = styled.div`
    text-align: center;
    img{
        max-height: 80px;
        width: auto;
        cursor: pointer;
    }
`;