import styled from 'styled-components';

export const TopRankingWrapper = styled.div`
  flex: 1;

  .header {
    height: 100px;
    display: flex;
    margin: 20px 0 0 20px;

    .image {
      width: 80px;
      height: 80px;
      position: relative;

      img {
        width: 80px;
        height: 80px;
      }
    }

    .info {
      margin: 5px 0 0 10px;

      a {
        font-size: 14px;
        color: #333;
        font-weight: 700;
      }

      .btn {
        display: inline-block;
        text-indent: -9999px;
        width: 22px;
        height: 22px;
        margin: 8px 10px 0 0;
      }

      .play {
        background-position: -267px -205px;

        &:hover {
          background-position: -267px -235px;
        }
      }

      .favor {
        background-position: -300px -205px;

        &:hover {
          background-position: -300px -235px;
        }
      }
    }
  }

  .list {
    height: 319px;
    margin-left: 50px;
    line-height: 32px;

    .list-item {
      position: relative;
      display: flex;
      align-items: center;
      height: 32px;
      width: 172px;

      .no {
        float: left;
        position: relative;
        width: 35px;
        height: 32px;
        margin-left: -35px;
        font-size: 16px;
        text-align: center;
        color: #666;
      }

      .no-top {
        color: #c10d0c;
      }

      .name {
        flex: 1;
        color: #000;
      }

      .oper {
        display: flex;
        align-items: center;
        display: none;
        width: 82px;

        a {
          text-indent: -9999px;
        }

        .btn {
          width: 17px;
          height: 17px;
          margin-left: 8px;
        }

        .play {
          background-position: -267px -268px;

          &:hover {
            background-position: -267px -288px;
          }
        }

        .addto {
          position: relative;
          top: 2px;
          background-position: 0 -700px;

          &:hover {
            background-position: -22px -700px;
          }
        }

        .favor {
          background-position: -297px -268px;

          &:hover {
            background-position: -297px -288px;
          }
        }
      
      }

      &:hover {
        .oper {
          display: inherit;
        }
      }
    }
  }

  .more {
    clear: both;
    text-align: right;
    height: 32px;
    line-height: 32px;
    margin-right: 32px;

    a {
      color: #333;
    }
  }
`