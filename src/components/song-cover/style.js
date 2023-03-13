import styled from 'styled-components';

export const SongCoverWarpper = styled.div`
  width: 140px;
  margin: 20px ${props => (props.right || 0)} 20px 0;

  .cover-top {
    position: relative;
    overflow: hidden;

    &>img {
      width: 140px;
      height: 140px;
    }

    .cover-image {
      position: relative;
      overflow: hidden;

    }

    .msk {
      text-indent: -9999px;
      background-position: 0 0;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
    }

    .cover {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 27px;
      /* background-position: 0 0; */

      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-position: 0 -537px;
        color: #ccc;
        height: 27px;

        .erji {
          margin-right: 5px;
          display: inline-block;
          width: 14px;
          height: 11px;
          background-position: 0 -24px;
        }

        .play {
          display: inline-block;
          width: 16px;
          height: 17px;
          background-position: 0 0;
          text-indent: -9999px;

          &:hover {
            background-position: 0 -60px;
          }
        }
      }
    }
  }

  .cover-buttom {
    font-size: 14px;
    margin-top: 5px;
    vertical-align: middle;
    font-family: Arial, Helvetica, sans-serif;

    a {
      color: #000;
    }
  }

  .cover-source {
    color: #666;
  }
`