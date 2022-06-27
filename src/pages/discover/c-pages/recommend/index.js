import React, { memo, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import { getTopBannerAction } from './store/actionCreators';

const Recommend = memo((props) => {

  const dispatch = useDispatch();
  const { topBanners } = useSelector(state => ({
    topBanners: state.recommend.topBanners,
  }))

  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch])

  return (
    <div>Recommend {topBanners.length} </div>
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