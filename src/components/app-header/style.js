import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;

  .content {
    height: 70px;
    /* background-color: blue; */

    display: flex;
    justify-content: space-between;
  }

  .divider {
    height: 5px;
    background-color: #c20202;
  }

`

export const HeaderLeft = styled.div`
  display: flex;
  font-size: 14px;

  .logo {
    display: block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
    text-indent: -99999999px;
  }

  .select-list {
    display: flex;
    line-height: 70px;

    .select-item {
      position: relative;
      a {
        display: block;
        padding: 0 19px;
        color: #ccc;
      }

      :last-of-type a {
        position: relative;
        ::after {
          position: absolute;
          content:  "";
          width: 28px;
          height: 19px;
          background-image: url(${require("@/assets/img/sprite_01.png")});
          background-position: -190px 0;
          top: 21px;
          /* right: -15px; */
          left: 100px;
        }
      }

      &:hover a,a.active {
        color: #fff;
        background:  #000;
        text-decoration: none;
      }

      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -105px -70px;
        background-size: 120px auto;
      }
    }
  }
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  padding-right: 26px;

  .icon {
    color: rgb(51,51,51);
    font-size: 14px;
  }

  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;

    input {
      &::placeholder {
        font-size: 12px;
        color: rgb(115,115,115);
      }
    };
  }

  .search:focus {
    border-color: rgb(217,217,217);
  }

  .center {
    width: 90px;
    height: 32px;
    line-height: 33px;
    /* text-align: center; */
    padding-left: 16px;
    border: 1px solid rgb(79,79,79);
    border-radius: 20px;
    margin: 0 16px;
    margin-left: 12px;
    background-color: transparent;
    color: rgb(204,204,204);
    zoom: 1;
  }

  .center:hover {
    color: #feffff;
    border: 1px solid #cccccc;
    text-decoration: none;
  }

  .login {
    color: rgb(120,120,120);
    font-size: 12px;
    margin-left: 4px;
    margin-top: -1px;
  }

`