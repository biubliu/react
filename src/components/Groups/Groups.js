import React,{Component} from 'react';
import './Groups.css';
import {Link} from 'react-router-dom';

class Groups extends Component{
    render(){
        return(
            <div id="user-b">
                <nav className="j-nav navbar">
                    <div className="logo fl">
                        <a href="javascript:window.history.go(-1);"></a>
                    </div>
                    <span className="user-title">我的拼团</span>
                    <div className="shopping-cart fr">
                        <a href="index.html"></a>
                    </div>
                </nav>
                <div className="groups-box">
                    <div className="groups-m mc-sum-box">
                        <div>
                            <div className="myorder-sum fl"><img src="images/pay1.jpg" /></div>
                            <div className="myorder-text">
                                <h1>越南进口白肉火龙果 </h1>
                                <h2>规格：2个装</h2>
                                <div className="tuan_g_core">
                                    <div className="tuan_g_price">
                                        <span>成团价</span>
                                        <b>¥14.00</b>
                                    </div>
                                    <div className="tuan_g_btn"></div>
                                </div>
                            </div>
                        </div>
                        <div className="groups-dowm-bnt">
                            拼团进行中
                            <Link to={{pathname:'/groupsdetails'}} className="btn fr">查看团详情</Link>
                            <Link to={{pathname:'/orderdetails'}} className="btn fr">查看订单详情</Link>
                        </div>
                    </div>
                    <div className="groups-m mc-sum-box">
                        <div>
                            <div className="myorder-sum fl"><img src="images/pay1.jpg" /></div>
                            <div className="myorder-text">
                                <h1>越南进口白肉火龙果 </h1>
                                <h2>规格：2个装</h2>
                                <div className="tuan_g_core">
                                    <div className="tuan_g_price">
                                        <span>成团价</span>
                                        <b>¥14.00</b>
                                    </div>
                                    <div className="tuan_g_btn"></div>
                                </div>
                            </div>
                        </div>
                        <div className="groups-dowm-bnt">
                            拼团进行中
                            <Link to={{pathname:'/groupsdetails'}} className="btn fr">查看团详情</Link>
                            <Link to={{pathname:'/orderdetails'}} className="btn fr">查看订单详情</Link>
                        </div>
                    </div>
                </div>
            </div>        
        )
    }
}
export default Groups;
