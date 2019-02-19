import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './Register.css';

class Register extends Component{
    state={
        username:'',
        password:'',
        confirm:''
    }
    render(){
        return(
            <div id="register-b">
                    <nav className="j-nav navbar">
                        <div className="logo fl">
                            <a href="javascript:window.history.go(-1)"></a>
                        </div>
                        <span className="user-title">注册会员</span>
                    </nav>

                   <div className="logina">
                        <form action="" method="post">
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
                                <li>
                                    <img src="./images/password.png"/>
                                    <label>密码</label>
                                    <input type="password" placeholder="请确认密码" name="confirm" value={this.state.confirm} onChange={(ev)=>this.changeIpt(ev)}/>
                                </li>
                            </ul>
                            <input type="button" value="立即注册"/>
                        </form>
                    </div>
                </div>
        )
    }
    changeIpt(ev){
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }
}
export default Register;