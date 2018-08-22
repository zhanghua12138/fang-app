//注册表单
import React, { Component } from 'react'
import PropTypes from 'prop-types'
//样式
import '../assets/styles/reginput.less'
export default class RegInput extends Component{
    static defaultProps = {
        type:'text'
    }
    static propTypes={
        type:PropTypes.string,
        placeholder:PropTypes.string,
        value:PropTypes.string
    }
    render(){
        let{type,placeholder,value}=this.props;
        return(
            <div className='reginput'>
                <span>{value}</span><input type={type} placeholder={placeholder}/>
            </div>
            )

    }
}