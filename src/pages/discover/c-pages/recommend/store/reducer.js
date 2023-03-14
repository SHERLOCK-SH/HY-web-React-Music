
import * as actionTypes from './constants';

import { Map } from 'immutable'

const defaultState = Map({
  topBanners: [],
  hotRecommend: [],
  newAlbums: [],
  topUpList: {},
  topNewList: {},
  topOriginList: {},
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      // return { ...state, topBanners: action.topBanners }
      return state.set('topBanners', action.topBanners)
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set('hotRecommend', action.hotRecommend)
    case actionTypes.CHANGE_NEW_ALBUMS:
      return state.set('newAlbums', action.newAlbums)
    case actionTypes.CHANGE_TOP_UPLIST:
      return state.set('topUpList', action.topUpList)
    case actionTypes.CHANGE_TOP_NEWLIST:
      return state.set('topNewList', action.topNewList)
    case actionTypes.CHANGE_TOP_ORIGINLIST:
      return state.set('topOriginList', action.topOriginList)
    default:
      return state;
  }
}

export default reducer;