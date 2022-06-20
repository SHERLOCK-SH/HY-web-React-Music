import styled from 'styled-components';

export const AppFooterWrapper = styled.div`
  height: 172px;
  background-color: #f2f2f2;
  color: #666;
  border-top: 1px solid #d3d3d3;
  

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const FooterLeft = styled.div`
  padding-top: 15px;
  line-height: 24px;
  width: 520px;

  .link {
    a {
      color: #999;
    }

    .line {
      margin: 0 3px 0 5px;
      color: rgb(194,194,194);
    }
  }

  .copyright {
    span {
      margin-right: 15px;
    }
  }

  .info {
    height: 28px;

    .police-link {
      margin-left: 10px;

      .police-logo {
        background: url(${require("@/assets/img/police.png")}) no-repeat;
        width: 14px;
        height: 14px;
        background-size: cover;
        display: inline-block;
        margin-right: 2px;
        vertical-align: -2px;
      }
    }
  }
`

export const FooterRight = styled.ul`
  display: flex;
  width: 420px;
  height: 70px;
  margin-top: 33px;

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 30px;
    width: 60px;
    height: 70px;

    .link {
      display: block;
      width: 50px;
      height: 45px;

      background-image: url(${require("@/assets/img/sprite_footer_02.png")});
      background-size: 110px 552px;
    }

    :nth-child(1) .link {
      background-position: -60px -456.5px;
    }

    :nth-child(2) .link {
      background-position: -60px -101px;
    }

    :nth-child(3) .link {
      background-position: 0 0;
    }

    :nth-child(4) .link {
      background-position: -60px -50px;
    }

    :nth-child(5) .link {
      background-position: 0 -101px;
    }

    .title {
      margin-top: 5px;
      display: block;
      margin: 5px 5px 0;
      height: 10px;
      font-size: 12px;
      background-image: url(${require("@/assets/img/sprite_footer_01.png")});
      background-size: 180px 139px;
    }

    :nth-child(1) .title {
      width: 72px;
      background-position: 0 170px;
      margin-left: 9px;
    }

    :nth-child(2) .title {
      width: 52px;
      margin-left: 12px;
      background-position: -1px -91px;
    }

    :nth-child(3) .title {
      width: 52px;
      background-position: 0 0;
    }

    :nth-child(4) .title {
      width: 52px;
      margin-left: 8px;
      background-position: 0 -54px;
    }

    :nth-child(5) .title {
      width: 52px;
      background-position: -1px -72px;
    }
  }

`