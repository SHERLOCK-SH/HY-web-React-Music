import React, { memo, useEffect, useRef } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { Carousel } from 'antd';
import { AlbumWrapper } from './style';
import ThemeHeaderRCM from '@/components/theme-header-rcm';
import { getNewAlbumsData } from '../../store/actionCreators';
import AlbumCover from '@/components/album-cover';

const NewAlbum = memo((props) => {


  const dispatch = useDispatch();
  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(['recommend', 'newAlbums'])
  }), shallowEqual)

  useEffect(() => {
    dispatch(getNewAlbumsData(10))
  }, [dispatch])

  const pageRef = useRef();

  return (
    <AlbumWrapper>
      <ThemeHeaderRCM title='新碟上架' />
      <div className='content'>
        <div className='arrow arrow-left sprite_02'
          onClick={e => pageRef.current.prev()}
        ></div>
        <div className='album'>
          <Carousel dots={false} ref={pageRef} >
            {
              [0, 1].map(item => (
                <div key={item} className="page">
                  {
                    newAlbums.slice(item * 5, (item + 1) * 5).map(iten => (
                      <AlbumCover
                        key={iten.id}
                        info={iten}
                        size={100}
                        width={118}
                        bgp={"-570px"}
                      />
                    ))
                  }
                </div>
              ))
            }
          </Carousel>
        </div>
        <div className='arrow arrow-right sprite_02'
          onClick={e => pageRef.current.next()}
        ></div>
      </div>
    </AlbumWrapper>
  )
})

export default NewAlbum