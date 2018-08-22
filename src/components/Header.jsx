import React, { Component } from 'react'
import {
    NavBar,
    Icon,
} from 'antd-mobile'
import '../assets/styles/header.less'
export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <NavBar
                    mode="dark"
                    // icon={<Icon type="down" />}
                    leftContent={
                        [
                            <span key="0">成都</span>,
                            <Icon key="1" type="down" />
                        ]
                    }
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <i key="0" className='iconfont icon-ditu'/>
                        , <span key="1">地图</span>
                    ]}
                >
                    <div className="search-btn">
                        <i className="iconfont icon-unie036"/>
                        搜好房，上小贝搜房
                    </div>
                </NavBar>
            </div>
        )
    }
}
