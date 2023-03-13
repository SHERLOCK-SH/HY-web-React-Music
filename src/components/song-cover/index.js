import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { SongCoverWarpper } from './style';

import { getCount, getSizeImage } from '@/utils/format-utils';

const SongCover = memo((props) => {

  const { info, sourceShow } = props;

  return (
    <SongCoverWarpper>
      <div className='cover-top'>
        <div className='cover-image'>
          <img src={getSizeImage(info.picUrl, 140)} alt='' />
          <a href='todo' className='msk sprite_covor'>{info.name}</a>
        </div>
        <div className='cover sprite_covor'>
          <div className='info sprite_covor'>
            <span>
              <i className='sprite_icon erji'></i>
              {getCount(info.playCount)}
            </span>
            <a href="#!" className='sprite_icon play'>{info.name}</a>
          </div>
        </div>
      </div>
      <div className='cover-buttom'>
        <a href='todo'>{info.name}</a>
      </div>
      {
        sourceShow && (
          <div className='cover-source text-nowrap'>
            by {info.copywriter || info.creator?.nickname}
          </div>
        )
      }
    </SongCoverWarpper>
  )
})

SongCover.propTypes = {
  info: PropTypes.object,
  sourceShow: PropTypes.bool.isRequired
}

SongCover.defaultProps = {
  sourceShow: false,
}

export default SongCover