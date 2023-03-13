import * as actionTypes from './constants';

import {
  getTopBanners,
  getHotRecommend,
  getNewAlbums,
} from '@/services/recommend';

const changeTopBannerAction = res => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners,
})

const changeHotRecommendAction = res => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommend: res.result,
})

const changeNewAlbums = response => ({
  type: actionTypes.CHANGE_NEW_ALBUMS,
  newAlbums: response.albums,
})

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res))
    })
  }
}

export const getHotRecommendAction = (limit) => {
  return dispatch => {
    getHotRecommend(limit).then(res=>{
      dispatch(changeHotRecommendAction(res))
    })
  }
}

export const getNewAlbumsAction = (limit) => {
  return dispatch => {
    getNewAlbums(limit).then(response=>{
      dispatch(changeNewAlbums(response))
    })
  }
}