import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getTopListData } from '../../store/actionCreators'

import { RankingListWrapper } from './style';
import ThemeHeaderRCM from '@/components/theme-header-rcm';
import TopRanking from '@/components/top-ranking';

const RankingList = memo((props) => {

  const dispatch = useDispatch();
  const { topUpList, topNewList, topOriginList } = useSelector(state => ({
    topUpList: state.getIn(["recommend", 'topUpList']),
    topNewList: state.getIn(["recommend", 'topNewList']),
    topOriginList: state.getIn(["recommend", 'topOriginList']),
  }))

  useEffect(() => {
    dispatch(getTopListData(19723756));
    dispatch(getTopListData(3779629));
    dispatch(getTopListData(2884035));
  }, [dispatch])

  return (
    <RankingListWrapper>
      <ThemeHeaderRCM title='榜单' />
      <div className='tops'>
        <TopRanking info={topUpList} />
        <TopRanking info={topNewList} />
        <TopRanking info={topOriginList} />
      </div>
    </RankingListWrapper>
  )
})

export default RankingList