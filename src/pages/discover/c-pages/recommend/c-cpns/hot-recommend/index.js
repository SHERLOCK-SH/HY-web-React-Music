import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { HOT_RECOMMEND_LIMIT } from '@/common/contants';

import ThemeHeaderRCM from '@/components/theme-header-rcm';
import SongCover from '@/components/song-cover';

import {
  HotRecommendWrapper
} from './style';

import { getHotRecommendData } from '../../store/actionCreators';

const HotRecommend = memo((props) => {

  const dispatch = useDispatch();

  const { hotRecommend } = useSelector(state => ({
    hotRecommend: state.getIn(['recommend', 'hotRecommend'])
  }), shallowEqual)

  useEffect(()=>{
    dispatch(getHotRecommendData(HOT_RECOMMEND_LIMIT))
  },[dispatch])

  return (
    <HotRecommendWrapper>
      <ThemeHeaderRCM title='热门推荐' keywords={["华语", "流行", "民谣", "摇滚", "电子"]} />
      <div className='recommend-list'>
        {
          hotRecommend.map((item,index)=>(
            <SongCover key={item.id} info={item} />
          ))
        }
      </div>
    </HotRecommendWrapper>
  )
})

export default HotRecommend