import React, { memo, Fragment } from 'react';

import { AlbumWrapper } from './style'
import { getSizeImage } from '@/utils/format-utils';

const AlbumCover = memo((props) => {

  const { info, size = 130, width = 153, bgp = "-845px" } = props;

  return (
    <AlbumWrapper size={size} width={width} bgp={bgp}>
      <div className='album-image'>
        <img src={getSizeImage(info.picUrl, size)} alt='' />
        <a href='todo' className='cover image_cover'>{info.name}</a>
      </div>
      <div className='album-info'>
        <p className='name text-nowrap'>
          <a href='todo'>{info.name}</a>
        </p>
        <p className='artist text-nowrap'>
          {
            !!info.artists && info.artists.length === 1 ?
              (<a href='todo'>{info.artist.name}</a>) :
              info.artists.map((item, index) => (
                <Fragment key={item.id}>
                  <a href='todo'>{item.name}</a>
                  {info.artists.length - 1 !== index && <>&nbsp;/&nbsp;</>}
                </Fragment>
              ))
          }
        </p>
      </div>
    </AlbumWrapper>
  )
})

export default AlbumCover