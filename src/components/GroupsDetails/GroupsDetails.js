import React,{Component} from 'react';
class GroupDetails extends Component{
    render(){
        return (
            <div id="user-b">
                <nav class="j-nav navbar">
                    <div class="logo fl">
                        <a href="index.html"></a>
                    </div>
                    <span class="user-title">我的拼团</span>
                    <div class="shopping-cart fr">
                        <a href="index.html"></a>
                    </div>
                </nav>
                <div class="groupsdetails-box">
                    <div class="win-groups">
                        <div class="win-icon">开团成功</div>
                        <p>快去邀请好友开参团吧</p>
                    </div>
                    <div class="groups-m">
                        <div class="mc-sum-box">
                            <div class="myorder-sum fl"><img src="images/pay1.jpg" /></div>
                            <div class="myorder-text">
                                <h1>越南进口白肉火龙果 </h1>
                                <h2>3人团：<span class="mc-t">￥<b>14.00</b>/件</span></h2>
                            </div>
                        </div>
                    </div>
                    <div class="groups-avata">
                        <div class="groups-avata-img">
                            <ul class="colonel">
                                <li><img src="images/user-img0.jpg" /></li>
                                <li><img src="images/tx2.jpg" /></li>
                                <li><img src="images/tx2.jpg" /></li>
                            </ul>
                        </div> 
                        <p class="man-number">还差<span>2</span>人，满三人才能享受拼团优惠呦~</p>
                        <div class="count_down2">
                            剩余<span>23</span>:<span>59</span>:<span>59</span>结束
                        </div>
                        <div class="man-name">
                            <ul>
                                <li class="colonel"><div class="man-name-img fl"><img src="images/user-img0.jpg" /></div>团长郭小帅<span>2015-12-25 17:00:00</span></li>
                                <li><div class="man-name-img fl"><img src="images/tx2.jpg" /></div>座位没主人，快去邀请好友占领吧</li>
                                <li><div class="man-name-img fl"><img src="images/tx2.jpg" /></div>座位没主人，快去邀请好友占领吧</li>
                            </ul> 
                        </div>
                    </div>
                    <div class="groups-m groups-m-s">
                        <div class="step">
                            <div class="step_hd">
                                拼团玩法<a class="step_more" href="tuan_rule.html">查看详情</a>
                            </div>
                            <div id="footItem" class="step_list">
                                <div class="step_item">
                                    <div class="step_num">1</div>
                                    <div class="step_detail">
                                        <p class="step_tit">选择
                                            <br/>心仪商品</p>
                                    </div>
                                </div>
                                <div class="step_item">
                                    <div class="step_num">2</div>
                                    <div class="step_detail">
                                        <p class="step_tit">支付开团
                                            <br/>或参团</p>
                                    </div>
                                </div>
                                <div class="step_item step_item_on">
                                    <div class="step_num">3</div>
                                    <div class="step_detail">
                                        <p class="step_tit">等待好友
                                            <br/>参团支付</p>
                                    </div>
                                </div>
                                <div class="step_item">
                                    <div class="step_num">4</div>
                                    <div class="step_detail">
                                        <p class="step_tit">达到人数
                                            <br/>团购成功</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="invite-btn">还差2人组团成功</div>
                </div>
            </div>
        )
    }
}
export default GroupDetails;

