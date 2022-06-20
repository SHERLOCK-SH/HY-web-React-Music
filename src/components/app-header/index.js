import React, { memo } from 'react'
import { NavLink } from 'react-router-dom';

import { headerLinks } from '@/common/local-data';

import { Input } from 'antd';

import { SearchOutlined } from '@ant-design/icons';
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style';

const AppHeader = memo(() => {

  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <sub className='sprite_01 icon'></sub>
        </NavLink>
      )
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  }

  return (
    <HeaderWrapper>
      <div className='content wrap_v1'>
        <HeaderLeft>
          <a href='#/' className='logo sprite_01'>网易云音乐</a>
          <div className='select-list'>
            {
              headerLinks.map((item, index) => (
                <div key={item.title} className='select-item'>
                  {showSelectItem(item, index)}
                </div>
              ))
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className='search' prefix={<SearchOutlined className='icon' />} placeholder="音乐/视频/电台/用户" />
          <a className='center' href='#'>创作者中心</a>
          <a href='#' className='login' >登录</a>
        </HeaderRight>
      </div>
      <div className='divider'></div>
    </HeaderWrapper>
  )
})

export default AppHeader