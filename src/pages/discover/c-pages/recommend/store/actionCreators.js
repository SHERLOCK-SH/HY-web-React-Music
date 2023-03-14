import * as actionTypes from './constants';

import {
  getTopBanners,
  getHotRecommend,
  getNewAlbums,
  getTopList
} from '@/services/recommend';

const changeTopBannerAction = res => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners,
})

const changeHotRecommendAction = res => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommend: res.result,
})

const changeNewAlbumsAction = response => ({
  type: actionTypes.CHANGE_NEW_ALBUMS,
  newAlbums: response.albums,
})

const changeTopUpListAction = response =>({
  type: actionTypes.CHANGE_TOP_UPLIST,
  topUpList:response.playlist
})
const changeTopNewListAction = response =>({
  type: actionTypes.CHANGE_TOP_NEWLIST,
  topNewList:response.playlist
})
const changeTopOriginListAction = response =>({
  type: actionTypes.CHANGE_TOP_ORIGINLIST,
  topOriginList:response.playlist
})

export const getTopBannerData = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res))
    })
  }
}

export const getHotRecommendData = (limit) => {
  return dispatch => {
    getHotRecommend(limit).then(res=>{
      dispatch(changeHotRecommendAction(res))
    })
  }
}

export const getNewAlbumsData = (limit) => {
  return dispatch => {
    getNewAlbums(limit).then(response=>{
      dispatch(changeNewAlbumsAction(response))
    })
  }
}

export const getTopListData = (id) => {
  return dispatch => {
    getTopList(id).then(response=>{
      switch (id) {
        case 19723756:
          dispatch(changeTopUpListAction(response));
          break;
        case 3779629:
          dispatch(changeTopNewListAction(response))
          break;
        case 2884035:
          dispatch(changeTopOriginListAction(response))
          break;
        default:
          console.log('其他数据处理');
          break;
      }
    })
  }
}