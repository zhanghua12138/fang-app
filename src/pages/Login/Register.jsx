// 1. 引入核心模块
import React, { Component } from 'react';
import PropTypes from 'prop-types'
//样式
import '../../assets/styles/register.less'
import RegInput from '../../components/RegInput'
import FromButton from '../../components/FromButton'
export default class Register extends Component{
    static contextTypes={
        router:PropTypes.object
    }
    constructor(){
        super();
        this.register=this.register.bind(this);
        this.getcode=this.getcode.bind(this);
        this.back=this.back.bind(this);

        this.state={
            verify:'获取验证码',
            flag:true
        }
    }
    register(){
        alert('注册成功');
        this.context.router.push('/app');
    }
    back(){
        this.context.router.push('/');
    }
    getcode(){
        if(this.state.flag){
            this.setState({
                flag:false
            })
            let num=59;
            let timer=setInterval(() =>{

                this.setState({
                    verify:num+'秒后重发'
                })
                num--;
                if(num===0){
                    this.setState({
                        verify:'重新获取',
                        flag:true
                    })
                    clearInterval(timer)
                }
            },1000)
        }
    }
    render(){
        return(
            <div className='reg-box'>
                <div className='regHeader'>
                    <i className='iconfont icon-fanhui regfanhui' onClick={this.back}></i>
                    <p>手机注册</p>
                </div>
                {/*注册表单*/}
                <form className='regform'>
                    <RegInput value='手机号:' placeholder='请输入手机号'/>
                    <div className='reginput'>
                        <span>验证码</span><input type='text' placeholder='请输入验证码'/>
                        <button type='button' className='yanzheng' onClick={this.getcode}>{this.state.verify}</button>
                    </div>
                    <div className='reginput agree'>
                        <div className='agree-son'>
                            <div><i className='iconfont icon-check'></i></div>我已同意<span>《用户服务协议》及《隐私政策》</span>
                        </div>
                    </div>
                    <FromButton value='登录' block reg onClick={this.register}/>
                    <a href="">已有帐号</a>
                </form>
            </div>
        )
    }
}