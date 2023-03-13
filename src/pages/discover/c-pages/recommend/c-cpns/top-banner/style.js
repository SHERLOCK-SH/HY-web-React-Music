import styled from 'styled-components';

export const BannerWrapper = styled.div`
  background: url(${props => props.bgImage}) center center/6000px;

  .banner {
    height: 283px;
    /* background-color: red; */

    display: flex;
    position: relative;
  }

`

export const BannerLeft = styled.div`
  width: 730px;

  .banner-item {
    overflow: hidden;
    height: 285px;
    width: 730px !important;
    .image {
      width: 730px;
      height: 283px;
    }
  }

  .banner-dots li,.slick-active {
    height: 20px;
    width: 20px !important;

    button {
      height: 20px;
      background-attachment: scroll;
      background-clip: border-box;
      background-color: rgba(0,0,0,0);
      background: url(${require("@/assets/img/banner.png")}) 0 9999px no-repeat !important;
      background-origin: border-box;
      opacity: unset !important;
      transition: none !important;
    }
  }
  
  .banner-dots li {

    button {
      background-position: 3px -343px !important;

      &:hover {
        background-position: -16px -343px !important;
      }
    }
  }

  .banner-dots .slick-active {
    button {
      background-position: -16px -343px !important;
    }
  }

`

export const BannerRight = styled.div`
  position: absolute;
  top: 0;
  z-index: 20;
  right: -1px;
  width: 254px;
  height:283px;
  background: url(${require('@/assets/img/download.png')}) no-repeat 0 0;

  a {
    display: block;
    width: 215px;
    height: 56px;
    margin: 186px 0 0 19px;
    /* background-position: 0 9999px; */
    text-indent: -9999px;
    background: url(${require('@/assets/img/download.png')}) no-repeat 0 9999px;


    &:hover {
      background-position: 0 -290px;
    }
  }

  p {
    margin: 10px auto;
    text-align: center;
    color: #8d8d8d;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  .shadow, .shadowr {
    background: url(${require("@/assets/img/banner.png")}) 0 9999px no-repeat
  }

  .shadow {
    display: block;
    position: absolute;
    top: 0;
    left: -20px;
    width: 20px;
    height: 285px;
    background-position: -1px 0;
  }

  .shadowr {
    left: auto;
    right: -20px;
    background-position: -20px 0;
  }

`

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 39%;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require('@/assets/img/banner_sprite.png')});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color:rgb(0, 0, 0, .1);
    }
  }

  .left {
    left: -68px;
    background-position:  0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }

`