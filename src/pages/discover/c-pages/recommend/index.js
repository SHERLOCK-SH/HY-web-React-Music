import React, { memo, } from 'react';

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from './style';

import TopBanner from './c-cpns/top-banner';
import HotRecommend from './c-cpns/hot-recommend';
import NewAlbum from './c-cpns/new-album';

const Recommend = memo((props) => {



  return (
    <RecommendWrapper>
      <TopBanner />
      <Content className='wrap_v2'>
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
        </RecommendLeft>
        <RecommendRight>

        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
})
export default Recommend

// const Recommend = memo((props) => {

//   const { getBanners, topBanners } = props;

//   useEffect(()=>{
//       getBanners()
//   },[getBanners])

//   return (
//     <div>Recommend {topBanners.length}</div>
//   )
// })

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//   getBanners: ()=>{
//     dispatch(getTopBannerAction())
//   }
// })

// export default connect(mapStateToProps,mapDispatchToProps)(Recommend)