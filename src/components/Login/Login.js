import React,{Component} from 'react';
import './Login.css';

import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import asyncUser from '../../store/actions/asyncUser';

class Login extends Component{
    state={
        username:'',
        password:'',
    }
    render(){
        return(
            <>
            	<div id="register-b">
                    
                    <nav className="j-nav navbar">
                        <div className="logo fl">
                            <a href="javascript:window.history.go(-1)"></a>
                        </div>
                        <span className="user-title">登录</span>
                        <div className="registerBtn">
                            <Link to={{pathname:'/register'}}>注册</Link>
                        </div>
                    </nav>
                    <div className="logina">
                        <form>
                            <ul>
                                <li>
                                    <img src="./images/login.png"/>
                                    <label>账号</label>
                                    <input type="text" placeholder="请输入账号" name="username" value={this.state.username} onChange={(ev)=>this.changeIpt(ev)}/>
                                </li>
                                <li>
                                    <img src="./images/password.png"/>
                                    <label>密码</label>
                                    <input type="password" placeholder="请输入密码" name="password" value={this.state.password} onChange={(ev)=>this.changeIpt(ev)}/>
                                </li>
                            </ul>
                            <input type="button" value="登录" onClick={this.props.login.bind(null,this.state.username,this.state.password,this.props.history)}/>
                        </form>
                    
                    </div>
                </div>
            </>
        )
    }
    changeIpt(ev){
        this.setState({
          [ev.target.name]:ev.target.value
        })
    }
}    
const initMapStateToProps = state =>({
    error:state.user.error
})
const initMapDispatchToProps = dispatch=> ({
    login: (username,password,history) =>dispatch(asyncUser({
        url: 'http://localhost:8200/user',
        username,password
    })).then(
        (data)=>{
            switch(data.error){
                case 0:
                history.push('/user');
                break;
                case 1:
                history.push('/login');
                break;
                case 2:
                history.push('/login');
                break;
            }
        }
    )
});
export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Login);