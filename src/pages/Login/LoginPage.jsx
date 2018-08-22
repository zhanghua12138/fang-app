// 1. 引入核心模块
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// 2. 引入样式文件

import '../../assets/styles/login.less'
import logoImg from '../../assets/images/logo.png'
//引入自定义组件
import FromInput from '../../components/FromInput'
import FromButton from '../../components/FromButton'

export default class LoginPage extends Component{
    static contextTypes={
        router:PropTypes.object
    }
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:''
        }
        this.loginTo=this.loginTo.bind(this);
        this.register=this.register.bind(this);
        this.otherLogin=this.otherLogin.bind(this);

    }
    handchange(e,name){
        // console.log(this);
        this.setState({
            [name]:e.target.value//获取输入框的值,name是传入的属性名,这里需要使用[name];
        })
    }
    loginTo(){
        let {username,password}  =this.state;
        if(username==='Mrzh'&&password==='111111'){
            // 提交请求登陆
            alert('登陆成功！');

            // console.log(this.context.router)
            // 通过全局路由,跳转到app首页(这里使用的是路由栈的原理)
            this.context.router.push('/app');
        }else{
            alert('用户名和密码不正确！');
            this.setState({
                password:''
            })
        }

    }
    register(){
        this.context.router.push('/register');
    }
    otherLogin(){
        alert('欢迎游客登录');
        this.context.router.push('/app');
    }
    render(){
        return(
            //登录容器
            <div className='login-box'>
                {/*logo*/}
                <img src={logoImg} alt="" className='logo-img'/>
                {/*登录表单*/}
                <form className='login-form'>
                    {/*输入框组件*/}
                    {/*这里的事件使用箭头函数把参数传入,同时使用箭头函数就不需要在构造器中绑定*/}
                    <FromInput icon='msnui-tel' onChange={(e)=>this.handchange(e,'username')} value={this.state.username}/>
                    {/*密码组件*/}
                    <FromInput type='password' icon='unie65b' onChange={(e)=>this.handchange(e,'password')} value={this.state.password}/>
                    {/*按钮组件*/}
                    <FromButton value='登录' block  onClick={this.loginTo}/>
                    <FromButton value='忘记密码?' text />
                    <FromButton value='免费注册' onClick ={this.register}/>&emsp;
                    <FromButton value='游客登录' onClick={this.otherLogin}/>
                </form>
            </div>
        )
    }
}