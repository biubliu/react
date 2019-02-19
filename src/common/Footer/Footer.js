import React,{Component} from 'react';
import './Footer.css';
import {NavLink} from 'react-router-dom';

class Footer extends Component{
    render(){
        return (
            <div className="footer">
                <nav>
                    <ul>
                        <li><NavLink to={{pathname:'/home'}} activeClassName="nav-controller active" ><div className="fb-home"></div>首页</NavLink></li>
                        <li><NavLink to={{pathname:'/groups'}} activeClassName="nav-controller active" ><div className="fb-group"></div>我的拼团</NavLink></li>
                        <li><NavLink to={{pathname:'/myorder'}} className="nav-controller"activeClassName="nav-controller active" ><div className="fb-list"></div>我的订单</NavLink></li>
                        <li><NavLink to={{pathname:'/user'}} activeClassName="nav-controller active" ><div className="fb-user"></div>个人中心</NavLink></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default Footer;