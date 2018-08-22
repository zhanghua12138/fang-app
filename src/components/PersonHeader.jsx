import React, { Component } from 'react'
import {
    Flex
} from 'antd-mobile'
import '../assets/styles/perheader.less'
import imgurl from '../assets/images/header.jpg'
export default class PersonHeader extends Component {
    render(){
        return(
            <Flex>
                <Flex.Item className='touxiang'>
                    <img src={imgurl} alt=""/>
                </Flex.Item>
                <Flex.Item className='middle'>
                    <p>登录注册</p>
                    <p>可与经纪人发起聊天</p>
                </Flex.Item>
                <Flex.Item className='shezhi'>
                    <span>设置</span>
                </Flex.Item>
            </Flex>
        )
    }
}