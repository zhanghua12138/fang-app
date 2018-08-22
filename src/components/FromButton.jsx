import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../assets/styles/formButton.less'
export default class FormButton extends Component{
    static propTypes={
        value:PropTypes.string,
        loginTo : PropTypes.func, // 必须传方法
        register : PropTypes.func // 必须传方法

    }
    render(){
        let props = Object.assign({},this.props);
        let {value,block,text,reg}=props;
        let btncls = 'form-button';
        if(block){
            btncls+=' block';
            delete props.block;
        }
        if(reg){
            btncls+=' reg';
            delete props.reg;
        }
        delete props.value;
        delete props.text;
        return(
            text?
            <p className="text-button">{value}</p>:
            <button type='button' className={btncls} {...props}>{value}</button>
        )
    }
}
