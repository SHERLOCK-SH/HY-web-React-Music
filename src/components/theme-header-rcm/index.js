import React, { memo } from 'react';
import PropTypes from 'prop-types';

import {
  HeaderWrapper
} from './style'

const ThemeHeader = memo((props) => {
  const { title, keywords } = props;

  return (
    <HeaderWrapper className='sprite_02'>
      <div className='left'>
        <a className='title' href='todo'>{title}</a>
        <div className='keyword'>
          {
            keywords.map((item, index) => (
              <div className='item' key={item}>
                <a href='todo' >{item}</a>
                {index !== keywords.length -1 && <span className='divider'>|</span>}
                {/* <span className='divider'>|</span> */}
              </div>
            ))
          }
        </div>
      </div>
      <div className='right'>
        <a href='todo'>更多</a>
        <i className='icon sprite_02'></i>
      </div>
    </HeaderWrapper>
  )
})

ThemeHeader.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array
}

ThemeHeader.defaultProps = {
  keywords: [],
}

export default ThemeHeader