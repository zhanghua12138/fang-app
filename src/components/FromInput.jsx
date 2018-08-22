/* 输入框组件*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../assets/styles/formInput.less'

export default class FormInput extends Component{
    static defaultProps = {
        type:'text'
    }
    static propTypes={
        type:PropTypes.string,
        icon:PropTypes.string,
        value : PropTypes.string, // 外部组件的状态
        onChange : PropTypes.func // 必须传方法
    }
    render(){
        let props = Object.assign({},this.props);//拷贝后一个对象到前一个对象,如果有相同的属性就被覆盖
        let {icon}=props;//拿到单独控制图标的属性
        delete props.icon;//删除input中不需要的属性
        return(
            <div className='form-group'>
                <i className={'left-icon iconfont icon-' + icon}></i>
                <input className='form-input' {...props}/>
            </div>
        )
    }
}