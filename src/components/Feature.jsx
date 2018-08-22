import React from 'react'
import { Flex } from "antd-mobile";
//引入样式
import '../assets/styles/feature.less'
//引入图片
import featureImg from "../assets/images/feature_img.png";

export default () => {
    return (
        <div className="feature-box">
            {/* 特色第一行 */}
            <Flex className='feature-row'>
                <Flex.Item align="center" className='feature-col'>
                    {/* 图标  */}
                    <i style={{backgroundImage:'url('+featureImg+')'}}/>
                    {/* 文字  */}
                    <p>新房</p>
                </Flex.Item>
                <Flex.Item align="center" className='feature-col'>
                    {/* 图标  */}
                    <i style={{backgroundImage:'url('+featureImg+')',backgroundPositionX:-50}}/>
                    {/* 文字  */}
                    <p>二手房</p>
                </Flex.Item>
                <Flex.Item align="center" className='feature-col'>
                    {/* 图标  */}
                    <i style={{backgroundImage:'url('+featureImg+')',backgroundPositionX:-100}}/>
                    {/* 文字  */}
                    <p>租房</p>
                </Flex.Item>
                <Flex.Item align="center" className='feature-col'>
                    {/* 图标  */}
                    <i style={{backgroundImage:'url('+featureImg+')',backgroundPositionX:-150}}/>
                    {/* 文字  */}
                    <p>商铺写字楼</p>
                </Flex.Item>
            </Flex>
            {/* 特色第二行 */}
            <Flex className='feature-row'>
                <Flex.Item align="center" className='feature-col'>
                    {/* 图标  */}
                    <i style={{backgroundImage:'url('+featureImg+')',backgroundPositionX:-200}}/>
                    {/* 文字  */}
                    <p>卖房</p>
                </Flex.Item>
                <Flex.Item align="center" className='feature-col'>
                    {/* 图标  */}
                    <i style={{backgroundImage:'url('+featureImg+')',backgroundPositionX:-250}}/>
                    {/* 文字  */}
                    <p>海外地产</p>
                </Flex.Item>
                <Flex.Item align="center" className='feature-col'>
                    {/* 图标  */}
                    <i style={{backgroundImage:'url('+featureImg+')',backgroundPositionX:-300}}/>
                    {/* 文字  */}
                    <p>小区房价</p>
                </Flex.Item>
                <Flex.Item align="center" className='feature-col'>
                    {/* 图标  */}
                    <i style={{backgroundImage:'url('+featureImg+')',backgroundPositionX:-350}}/>
                    {/* 文字  */}
                    <p>问答</p>
                </Flex.Item>
            </Flex>
        </div>
    )
}
