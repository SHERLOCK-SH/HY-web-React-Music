import React, { memo, Fragment } from 'react';

import { footerLinks, footerImages } from '@/common/local-data';
import moment from 'moment';

import { AppFooterWrapper, FooterLeft, FooterRight } from './style';

const AppFooter = memo(() => {
  return (
    <AppFooterWrapper>
      <div className='wrap_v2 content'>
        <FooterLeft>
          <p className='link'>
            {
              footerLinks.map((item, index) => (
                <Fragment key={item.title}>
                  <a href={item.link} target='_blank' rel='noopener noreferrer' >{item.title}</a>
                  {
                    index !== footerLinks.length - 1 && <span className='line'>|</span>
                  }
                </Fragment>
              ))
            }
          </p>
          <div className='copyright'>
            <span>网易公司版权所有©1997-{moment().year()}</span>
            <span>
              杭州乐读科技有限公司运营：
              <a href='https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8282703158/452a/ca0c/3a10/caad83bc8ffaa850a9dc1613d74824fc.png' >浙网文[2021] 1186-054号</a>
            </span>
          </div>
          <p className="info">
            <span>粤B2-20090191-18&nbsp;&nbsp;</span>
            <a href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action" rel="noopener noreferrer" target="_blank">
              工业和信息化部备案管理系统网站
            </a>
            <a className='police-link' href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564' target='_blank' rel='noopener noreferrer'>
              <span className='police-logo'></span>
              <span>浙公网安备 33010902002564号</span>
            </a>
          </p>
          <p className="report">
            <span>互联网宗教信息服务许可证：浙（2022）0000120</span>
          </p>
        </FooterLeft>
        <FooterRight>
          {
            footerImages.map((item,index)=>(
              <li className='item' key={item.link} >
                <a className='link' href={item.link} target='_blank' rel='noopener noreferrer'></a>
                <span className='title'>{item.title}</span>
              </li>
            ))
          }
        </FooterRight>
      </div>
    </AppFooterWrapper>
  )
})

export default AppFooter