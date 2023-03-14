import React, { memo } from 'react';

import { TopRankingWrapper } from './style';
import { getSizeImage } from '@/utils/format-utils';

const TopRanking = memo((props) => {
  const { info } = props;
  const { tracks = [] } = info;


  return (
    <TopRankingWrapper>
      <div className='header'>
          <div className='image'>
            <img src={getSizeImage(info.coverImgUrl)} alt='' />
            <a href='/todo' className='image_cover'>ranking</a>
          </div>
          <div className='info'>
            <a href='todo'>{info.name}</a>
            <div>
              <a href='' className='btn play sprite_02'>播放</a>
              <a href='' className='btn favor sprite_02'>收藏</a>
            </div>
          </div>
      </div>
      <ol className='list'>
        {
          tracks.slice(0,10).map((item,index)=>(
            <li key={item.id} className="list-item">
              <span className={index<3?"no no-top":"no"}>{index+1}</span>
              <a href='todo' className='name text-nowrap'>{item.name}</a>
              <div className='oper'>
                <a href='' className='btn sprite_02 play'>播放</a>
                <a href='' className='btn sprite_icon2 addto'>添加</a>
                <a href='' className='btn sprite_02 favor'>收藏</a>
              </div>
            </li>
          ))
        }
      </ol>
      <div className='more'>
        <a href='todo'>查看全部&gt;</a>
      </div>
    </TopRankingWrapper>
  )
})

export default TopRanking