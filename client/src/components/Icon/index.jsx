import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import * as iconsNames from './iconsNames';

const IconTemplate = props => {
  const { children, width, height, className, strictSize } = props;

  return (
    <svg
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox={`0 0 ${width} ${height}`}
      className={`icon ${className}`}
      style={{
        width: strictSize ? `${width}px` : '1em',
        height: strictSize ? `${height}px` : `${height / width}em`
      }}
    >
      {children}
    </svg>
  );
};

IconTemplate.defaultProps = {
  className: ''
};

const Icon = props => {
  const { name } = props;

  switch (name) {
    case iconsNames.LOGO_D2:
      return (
        <IconTemplate {...props} width={40} height={40}>
          <path d="M8.01373 23.5315H12.6993C16.6092 23.5315 19.79 20.35 19.79 16.4395C19.79 12.5291 16.6092 9.34753 12.6993 9.34753H8.01373V23.5315ZM37.0484 35.8099H16.9664L31.32 21.4542C32.2088 20.565 32.2088 19.1182 31.32 18.2288C30.8892 17.7983 30.3165 17.561 29.7072 17.561C29.0982 17.561 28.5257 17.7983 28.0949 18.2288L21.2918 25.0333C18.9967 27.3287 15.9452 28.5929 12.6993 28.5929H2.95312V4.28613H12.6993C18.6332 4.28613 23.7456 8.6519 24.6911 14.4809C27.5662 11.7885 32.0938 11.8455 34.8981 14.65C37.7601 17.5127 37.7601 22.1705 34.8981 25.0333L29.1839 30.7486H37.0484V35.8099Z" />
        </IconTemplate>
      );

    case iconsNames.SOCIAL_INST:
      return (
        <IconTemplate {...props} width={32} height={32}>
          <path d="M20.4806 6H11.5192C8.4759 6 6 8.47601 6 11.5193V20.4807C6 23.5241 8.4759 26 11.5192 26H20.4806C23.5241 26 26 23.524 26 20.4807V11.5193C26.0001 8.47601 23.5241 6 20.4806 6ZM24.2256 20.4807C24.2256 22.5456 22.5456 24.2255 20.4807 24.2255H11.5192C9.45435 24.2256 7.7745 22.5456 7.7745 20.4807V11.5193C7.7745 9.45447 9.45435 7.7745 11.5192 7.7745H20.4806C22.5455 7.7745 24.2255 9.45447 24.2255 11.5193L24.2256 20.4807Z" />
          <path d="M16 10.8467C13.1583 10.8467 10.8465 13.1586 10.8465 16.0002C10.8465 18.8418 13.1583 21.1535 16 21.1535C18.8417 21.1535 21.1535 18.8418 21.1535 16.0002C21.1535 13.1586 18.8417 10.8467 16 10.8467ZM16 19.3789C14.1369 19.3789 12.621 17.8632 12.621 16.0001C12.621 14.1369 14.1368 12.6211 16 12.6211C17.8632 12.6211 19.379 14.1369 19.379 16.0001C19.379 17.8632 17.8631 19.3789 16 19.3789Z" />
          <path d="M21.3696 9.34208C21.0277 9.34208 20.6919 9.4805 20.4504 9.72301C20.2078 9.96434 20.0683 10.3003 20.0683 10.6434C20.0683 10.9854 20.2079 11.3212 20.4504 11.5638C20.6918 11.8051 21.0277 11.9447 21.3696 11.9447C21.7127 11.9447 22.0475 11.8051 22.29 11.5638C22.5325 11.3212 22.6709 10.9853 22.6709 10.6434C22.6709 10.3003 22.5325 9.96434 22.29 9.72301C22.0487 9.4805 21.7127 9.34208 21.3696 9.34208Z" />
        </IconTemplate>
      );

    case iconsNames.SOCIAL_YT:
      return (
        <IconTemplate {...props} width={32} height={32}>
          <path d="M27.9865 14.125C27.9778 13.6751 27.9396 13.1062 27.8729 12.4188C27.8057 11.7311 27.7097 11.1165 27.5849 10.575C27.442 9.96671 27.1317 9.45416 26.6541 9.03749C26.1765 8.62074 25.6206 8.37915 24.9865 8.31238C23.0042 8.1042 20.0087 8 16 8C11.9911 8 8.9956 8.1042 7.01345 8.31238C6.37943 8.37911 5.82576 8.62074 5.35268 9.03749C4.87941 9.45403 4.57135 9.96658 4.42847 10.575C4.29468 11.1167 4.19411 11.7312 4.12717 12.4188C4.06033 13.1062 4.02233 13.6748 4.01346 14.125C4.00441 14.575 4 15.1999 4 16C4 16.8 4.00441 17.4251 4.01351 17.875C4.02238 18.3252 4.06037 18.8938 4.12722 19.5811C4.19416 20.2688 4.29018 20.8834 4.41519 21.425C4.55808 22.0335 4.86829 22.5459 5.34597 22.9624C5.82374 23.3791 6.37966 23.6207 7.0135 23.6874C8.99565 23.8958 11.991 24 16 24C20.0091 24 23.0043 23.8958 24.9865 23.6874C25.6207 23.6208 26.1741 23.3791 26.6474 22.9624C27.1206 22.5459 27.4285 22.0332 27.5714 21.425C27.7053 20.8834 27.8057 20.2688 27.8729 19.5811C27.9396 18.8939 27.9775 18.325 27.9865 17.875C27.9955 17.4251 28 16.8 28 16C28 15.1999 27.9955 14.575 27.9865 14.125ZM20.7411 16.675L13.8841 20.6749C13.759 20.7582 13.6071 20.7998 13.4286 20.7998C13.2947 20.7998 13.1564 20.7664 13.0135 20.6997C12.7189 20.5499 12.5717 20.3165 12.5717 19.9999V12.0002C12.5717 11.6837 12.719 11.4502 13.0135 11.3003C13.3172 11.15 13.6073 11.1585 13.8841 11.3253L20.7412 15.3252C21.0089 15.4666 21.1428 15.6917 21.1428 16C21.1428 16.3083 21.0089 16.5335 20.7411 16.675Z" />
        </IconTemplate>
      );

    default:
      return null;
  }
};

Icon.propTypes = {
  name: PropTypes.string,
  strictSize: PropTypes.bool
};

export { Icon as default, iconsNames };
