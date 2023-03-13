
import * as actionTypes from './constants';

import { Map } from 'immutable'

const defaultState = Map({
  topBanners: [],
  hotRecommend: [],
  newAlbums: [],
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      // return { ...state, topBanners: action.topBanners }
      return state.set('topBanners', action.topBanners)
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set('hotRecommend',action.hotRecommend)
    case actionTypes.CHANGE_NEW_ALBUMS:
      return state.set('newAlbums',action.newAlbums)
    default:
      return state;
  }
}

export default reducer;