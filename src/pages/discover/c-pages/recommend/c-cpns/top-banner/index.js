import React, { memo, useEffect, useRef, useState, useCallback, } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getTopBannerAction } from '../../store/actionCreators'

import { Carousel } from 'antd';
import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl,
} from './style'

const TopBanner = memo(() => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const dispatch = useDispatch();
  const { topBanners } = useSelector(state => ({
    // topBanners: state.recommend.get('topBanners'),
    topBanners: state.getIn(['recommend', 'topBanners']),
  }), shallowEqual)


  const BannerRef = useRef();
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch])

  const bannerChange = useCallback((form, to) => {
    setTimeout(() => {
      setCurrentIndex(to);
    }, 0)
  }, [])

  // const bgImage = 
  const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20")

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className='banner wrap_v2'>
        <BannerLeft>
          <Carousel effect='fade' dots={{ className: "banner-dots" }} ref={BannerRef} beforeChange={bannerChange}>
            {
              topBanners.map((item, index) => (
                <div className='banner-item' key={item.imageUrl}>
                  <a href='todo' style={{overflow:'hidden'}}>
                    <img className='image' src={item.imageUrl} alt={item.typeTitle} />
                  </a>
                </div>
              ))
            }
          </Carousel>
        </BannerLeft>
        <BannerRight>
          <a href='todo' hidefocus="true" data-res-action="bilog" data-log-action="page">下载客户端</a>
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
          <span className='shadow'></span>
          <span className='shadowr'></span>
        </BannerRight>
        <BannerControl>
          <button className='btn left' onClick={e => BannerRef.current.prev()}></button>
          <button className='btn right' onClick={e => BannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})

export default TopBanner