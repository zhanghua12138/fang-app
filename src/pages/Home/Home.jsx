import React, { Component } from 'react'
// 2. 引入样式库
import '../../assets/styles/home.less'
// 引入首页头部组件
import Header from '../../components/Header'
import Feature from '../../components/Feature'
import GuessYouLike from '../GuessYouLike/GuessYouLike'
//引入antd-mobile的轮播图
import { Carousel,Flex } from 'antd-mobile'
//引入轮播图片
import bannerImg1  from '../../assets/images/banner1.jpg'
import bannerImg2  from '../../assets/images/banner2.jpg'
export default class Home extends Component{
    render() {
        return (
            <div className='home-box'>
                {/*顶部*/}
                <Header/>
                {/*轮播*/}
                <Carousel   // 轮播变化值（索引，banner图，图链接地址）
                    // 是否自动切换
                    autoplay={false}
                    // 是否循环播放
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    <a
                        key={1}
                        href="http://www.alipay.com"
                        style={{ display: 'inline-block', width: '100%' }}  // , height: this.state.imgHeight
                    >
                        <img
                            src={bannerImg1}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                            }}
                        />
                    </a>
                    <a
                        key={2}
                        href="http://www.alipay.com"
                        style={{ display: 'inline-block', width: '100%'}}  // , height: this.state.imgHeight
                    >
                        <img
                            src={bannerImg2}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                            }}
                        />
                    </a>
                </Carousel>
                {/*特色服务*/}
                <Feature/>
                {/*推广服务*/}
                <Flex style={{backgroundColor :'#fff',marginTop:10,marginBottom:10}}>
                    <Flex.Item align="center" style={{paddingTop:10,color:'#f00'}}>
                        {/* 图标  */}
                        <i className="iconfont icon-youhuiquan" style={{fontSize:32}}/>
                        {/* 文字  */}
                        <p style={{marginTop:5}}>独家优惠</p>
                    </Flex.Item>
                    <Flex.Item align="center" style={{paddingTop:10,color:'#a9a9a9'}}>
                        {/* 图标  */}
                        <i className="iconfont icon-gongjiao" style={{fontSize:32}}/>
                        {/* 文字  */}
                        <p style={{marginTop:5}}>免费看房</p>
                    </Flex.Item>
                    <Flex.Item align="center" style={{paddingTop:10,color:'#ffe245'}}>
                        {/* 图标  */}
                        <i className="iconfont icon-qian" style={{fontSize:32}}/>
                        {/* 文字  */}
                        <p style={{marginTop:5}}>信用贷</p>
                    </Flex.Item>
                    <Flex.Item align="center" style={{paddingTop:10,color:'#02bfff'}}>
                        {/* 图标  */}
                        <i className="iconfont icon-wenjiandocuments18" style={{fontSize:32}}/>
                        {/* 文字  */}
                        <p style={{marginTop:5}}>房市资讯</p>
                    </Flex.Item>
                </Flex>
                {/*猜你喜欢*/}
                <GuessYouLike/>
            </div>

        )
    }
}