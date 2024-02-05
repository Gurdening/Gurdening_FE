import styled from 'styled-components';

export const BannerWrapper = styled.div`
  width: 375px;
  overflow: hidden;
`;

export const BannerStyle = styled.div`
  position: relative;

  .banner-text {
    position: absolute;
    top: 10px;
    z-index: 10;
    max-width: 100%;
    white-space: nowrap;
    width: 100%;
    color: white;
    font-size: 13px;
    background-color: #fbb24d;
    padding: 10px 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .banner-image img {
    width: 375px;
    display: block;
    margin: 0 auto;
  }

  img {
    max-width: 375px;
    height: auto;
    padding-top: 40px;
  }

  .slick-dots {
    li {
      button {
        width: 25px;
        height: 3px;
        border-radius: 0;
        background: #fbe6c9;
        padding: 1px;
        margin-right: 25px;
        margin-top: -20px;

        &:before {
          font-size: 0;
          color: transparent;
        }
      }

      &.slick-active button {
        background: #fbb24d;
      }
    }
  }
`;
