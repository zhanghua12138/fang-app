//  1. 引入核心模块
import React, { Component } from 'react'
import { Flex} from 'antd-mobile';
import '../assets/styles/footer.less';
// 3. 声明并导出组件
export default class Footer extends Component {
    render(){
        return(
            <Flex className='footer-box'>
                <Flex.Item>
                    <a href="/#/app">
                        <i className='iconfont icon-shouyeshouye'></i>
                        <p>首页</p>
                    </a>
                </Flex.Item>

                <Flex.Item>
                    <a href="/#/Personal">
                        <i className='iconfont icon-liaotian'></i>
                        <p>微聊</p>
                    </a>
                </Flex.Item>

                <Flex.Item>
                    <a href="/#/GuessYouLike">
                        <i className='iconfont icon-tuijian'></i>
                        <p>推荐</p>
                    </a>
                </Flex.Item>

                <Flex.Item>
                    <a href="/#/Personal">
                        <i className='iconfont icon-wode'></i>
                        <p>我的</p>
                    </a>
                </Flex.Item>
            </Flex>
        )
    }
}