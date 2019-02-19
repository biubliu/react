import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


class User extends Component{
    render(){
        return (
            <div id="user-b">
                <nav className="j-nav navbar">
                    <div className="logo fl">
                        <a href="javascript:window.history.go(-1);"></a>
                    </div>
                    <span className="user-title">个人中心</span>
                    <div className="shopping-cart fr">
                        <Link to={{pathname:'./buycar'}} ></Link>
                    </div>
                </nav>
                <section className="m-component-user" id="m-user">
                    <div className="m-user-avatar text-center">
                        <span className="avatarPic"><img style={{display: 'inline'}} className="lazy img-circle" src="images/user-img0.jpg"/></span>
                       
                        <div className="user_btn">
                            <Link to={{pathname:'/login'}} className="this">登录</Link>
                            <Link to={{pathname:'/register'}}>注册</Link>
                        </div>
                    </div>
                    
                    <div className="head_list">
                        <ul className="m-user-list">
                            <li><span>￥0.00</span><br/>账户余额</li>
                            <li><Link to={{pathname:'/coupon'}}><span className="bar"></span><span>4</span><br/>优惠卷</Link></li>
                            <li><Link to={{pathname:'/myorder'}}><span className="bar"></span><span>2</span><br/>我的订单</Link></li>
                        </ul>
                    </div>
                    <ul className="m-user-content">
                        <li>
                            <div className="m-user-item">
                            <Link to={{pathname:'/orders'}} className="user-order">邀请好友得大礼包</Link>
                            </div>
                            <div className="m-user-item">
                            <Link to={{pathname:'/groups'}} className="user-coupon">我的团单</Link>
                            </div>
                        </li>
                        <li>
                            <div className="m-user-item">
                            <a href="user/coupon/index.html" className="user-site">管理收货地址</a>
                            </div>
                            <div className="m-user-item">
                            <a href="user/coupon/index.html" className="user-set">设置</a>
                            </div>
                            <div className="m-user-item">
                            <div className="user-score"><span className="pull-right">400-110110</span>联系客服</div>
                            </div>
                        </li>
                        <li className="m-user-footer">
                        粤ICP备8888888 广东·广州
                        </li>
                    </ul>
                </section>
            </div>
        )
    }
}
const initMapStateToProps = state => ({
    username:state.data.username
})
const initMapDispatchToProps = dispatch =>({
    
})
export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(User);
