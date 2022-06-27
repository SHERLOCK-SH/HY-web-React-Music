import React, { memo, useEffect } from 'react';

import { dicoverMenu } from '@/common/local-data';

import { DiscoverWrapper, TopMenu } from './style';

import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';

import request from '@/services/request';

const Discover = memo((props) => {

  const { route } = props;

  // useEffect(()=>{
  //   request({
  //     url: "/banner?type=0"
  //   }).then(res=>{
  //     console.log(res);
  //   })
  // },[])


  return (
    <DiscoverWrapper>
      <div className='top'>
        <TopMenu className='wrap_v1'>
          {
            dicoverMenu.map((item,index)=>(
              <div className='item' key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            ))
          }
        </TopMenu>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})

export default Discover