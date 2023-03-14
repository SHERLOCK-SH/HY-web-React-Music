import request from './request';

export const getTopBanners = () => {
  return request({
    url: "/banner?type=0"
  })
}

export const getHotRecommend = (limit) =>{
  return request({
    url: '/personalized',
    params: {
      limit
    }
  })
}

export const getNewAlbums = (limit) => {
  return request({
    // url: '/top/album',
    url: '/album/newest',
    params: {
      limit
    }
  })
}

export const getTopList = (id) => {
  return request({
    url: "/playlist/detail",
    params: {
      id
    }
  })
}