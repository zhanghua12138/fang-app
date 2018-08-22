//  1. 引入核心模块
import React, { Component } from 'react'
import { Flex} from 'antd-mobile';
import PropTypes from 'prop-types'
// 2. 引入样式文件
 import '../../assets/styles/personal.less';
 import header from '../../assets/images/header.jpg';

// 3. 声明并导出组件
export default class Personal extends Component {
    static contextTypes={
        router:PropTypes.object
    }
    constructor(){
        super();
        this.hondeChange = this.hondeChange.bind(this);
    }
    hondeChange(){
        this.context.router.push('/');
    }

    render() {
        return (
            <div className='personal-box'>

               <div className='header-box'>
                   {/*heard上*/}
                   <Flex>
                       <Flex.Item>
                           <img src={header} alt="" className='headp'/>
                       </Flex.Item>
                       <Flex.Item className='login'>
                           <h2 onClick={this.hondeChange}>登录/注册</h2>
                           <p>可以与经纪人发起聊天</p>
                       </Flex.Item>
                       <Flex.Item  className='set'>
                           <i className='iconfont icon-shezhi'></i>
                       </Flex.Item>
                   </Flex>
                   {/*heard下*/}
                   <Flex>
                       <Flex.Item className='money'>
                           <p>0</p>
                           <p><i className='iconfont icon-qianbao'></i> <span>钱包</span></p>
                       </Flex.Item>
                       <Flex.Item className='pre'>
                           <p>0</p>
                           <p><i className='iconfont icon-youhuiquan'></i> <span>优惠</span></p>
                       </Flex.Item>
                       <Flex.Item  className='int'>
                           <p>0</p>
                           <p><i className='iconfont icon-jifen'></i> <span>积分</span></p>
                       </Flex.Item>
                   </Flex>
                </div>
                <div className='list1' >
                    <Flex>
                        <Flex.Item className='money' style={{flex:1}}>
                            <i className='iconfont icon-jifen'></i>
                        </Flex.Item>
                        <Flex.Item style={{flex:7}}>
                            <span>我的积分</span>
                        </Flex.Item>
                        <Flex.Item  className='int' style={{flex:1}}>
                          <i className='iconfont icon-jiantou'></i>
                        </Flex.Item>
                    </Flex>
                    <Flex  className='two'>
                        <Flex.Item className='money' style={{flex:1}}>
                            <i className='iconfont icon-dingyue'></i>
                        </Flex.Item>
                        <Flex.Item  style={{flex:7}}>
                            <span>我的订阅</span>
                        </Flex.Item>
                        <Flex.Item  className='int' style={{flex:1}}>
                            <i className='iconfont icon-jiantou'></i>
                        </Flex.Item>
                    </Flex>
                    <Flex>
                        <Flex.Item className='money' style={{flex:1}}>
                            <i className='iconfont icon-liaotian'></i>
                        </Flex.Item>
                        <Flex.Item  style={{flex:7}}>
                            <span>微信联系人</span>
                        </Flex.Item>
                        <Flex.Item  className='int' style={{flex:1}}>
                            <i className='iconfont icon-jiantou'></i>
                        </Flex.Item>
                    </Flex>
                </div>
                {/*list2*/}
                <div className='list2' >
                    <Flex >
                        <Flex.Item className='money' style={{flex:1}}>
                            <i className='iconfont icon-jifen'></i>
                        </Flex.Item>
                        <Flex.Item style={{flex:7}}>
                            <span>房贷计算器</span>
                        </Flex.Item>
                        <Flex.Item  className='int' style={{flex:1}}>
                            <i className='iconfont icon-jiantou'></i>
                        </Flex.Item>
                    </Flex>
                    <Flex className='one'>
                        <Flex.Item className='money' style={{flex:1}}>
                            <i className='iconfont icon-dingyue'></i>
                        </Flex.Item>
                        <Flex.Item  style={{flex:7}}>
                            <span>我的房子</span>
                        </Flex.Item>
                        <Flex.Item  className='int' style={{flex:1}}>
                            <i className='iconfont icon-jiantou'></i>
                        </Flex.Item>
                    </Flex>
                </div>
                {/*list3*/}
                <div className='list3' >
                    <Flex>
                        <Flex.Item className='money' style={{flex:1}}>
                            <i className='iconfont icon-jifen'></i>
                        </Flex.Item>
                        <Flex.Item style={{flex:7}}>
                            <span>我的看房记录</span>
                        </Flex.Item>
                        <Flex.Item  className='int' style={{flex:1}}>
                            <i className='iconfont icon-jiantou'></i>
                        </Flex.Item>
                    </Flex>
                    <Flex  className='one'>
                        <Flex.Item className='money' style={{flex:1}}>
                            <i className='iconfont icon-dingyue'></i>
                        </Flex.Item>
                        <Flex.Item  style={{flex:7}}>
                            <span>我的问答</span>
                        </Flex.Item>
                        <Flex.Item  className='int' style={{flex:1}}>
                            <i className='iconfont icon-jiantou'></i>
                        </Flex.Item>
                    </Flex>
                </div>
                {/*list4*/}
                <div className='list4' >
                    <Flex >
                        <Flex.Item className='money' style={{flex:1}}>
                            <i className='iconfont icon-jifen'></i>
                        </Flex.Item>
                        <Flex.Item style={{flex:7}}>
                            <span>我的积分</span>
                        </Flex.Item>
                        <Flex.Item  className='int' style={{flex:1}}>
                            <i className='iconfont icon-jiantou'></i>
                        </Flex.Item>
                    </Flex>
                    <Flex className='one'>
                        <Flex.Item className='money' style={{flex:1}}>
                            <i className='iconfont icon-dingyue'></i>
                        </Flex.Item>
                        <Flex.Item  style={{flex:7}}>
                            <span>我的订阅</span>
                        </Flex.Item>
                        <Flex.Item  className='int' style={{flex:1}}>
                            <i className='iconfont icon-jiantou'></i>
                        </Flex.Item>
                    </Flex>

                </div>

            </div>

        )
    }
}
