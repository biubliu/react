import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as types from '../../store/types';
import asyncList from '../../store/actions/asyncList';

class Detail extends Component{
    componentDidMount(){
        let id = this.props.match.params.id-0;
        // console.log(id)
        console.log(this.props.match)
        this.props.get(id)
    }
    render(){
        let {detail} = this.props;
        return(
            <div>
                <ReactSwipe 
                    className="carousel"
                    swipeOptions={{
                        continuous: true,
                        auto: 1000,
                    }}
                >
                    <div> 
                        <img src={'/'+detail.img} />
                    </div>
                    <div>
                        <img src={'/'+detail.img} />
                    </div>            
                </ReactSwipe>
                <div className="details-body-box">
                    <div className="tm">
                        <div className="td2">
                            <div className="td2_price"><span>已售：<b>948</b>件</span></div>
                            <div className="cl"></div>
                            <div className="td2_name">{detail.title}</div>
                            <div className="td2_cx">{detail.miaoshu}</div>
                        </div>
                    </div>
                    <div className="tm2">
                        <div className="td2_info">
                            <div className="td2_num">支付开团并邀请<span id="tuan_more_need_number">2</span>人参团，人数不足自动退款</div>
                        </div>
                        <div style={{visibility: "visible"}} className="kt">
                            <div className="pin"> 
                                <div className="pin_btn_box">
                                    <div className="pin_btn">
                                        3人团
                                    </div>
                                </div>
                                <div className="pin_btn_box">
                                    <div className="pin_btn pin_btn_bg2">
                                        原价
                                    </div>
                                </div>
                                <div className="cl"></div>
                            </div>
                            <div>
                                <a href="javascript:void(0);" className="kt_item kt_item_buy">
                                    <div className="kt_price"><b>￥{detail.oldprice}</b>&nbsp;/&nbsp;700g~800g</div>
                                    <div className="kt_btn" id="tuan_one_number">原价购买</div>
                                </a>
                                <Link to={{pathname:'/pay'}}>
                                    <div className="kt_price"><b>￥{detail.price}</b>&nbsp;/&nbsp;700g~800g</div>
                                    <div className="kt_btn">立即拼团<br/></div>
                                </Link>   
                            </div>
                            
                        </div> 
                    </div>        
                   
                    <div className="step">
                        <div className="step_hd">
                            拼团玩法<a className="step_more" href="tuan_rule.html">查看详情</a>
                        </div>
                        <div id="footItem" className="step_list">
                            <div className="step_item step_item_on">
                                <div className="step_num">1</div>
                                <div className="step_detail">
                                    <p className="step_tit">选择
                                        <br/>心仪商品</p>
                                </div>
                            </div>
                            <div className="step_item ">
                                <div className="step_num">2</div>
                                <div className="step_detail">
                                    <p className="step_tit">支付开团
                                        <br/>或参团</p>
                                </div>
                            </div>
                            <div className="step_item ">
                                <div className="step_num">3</div>
                                <div className="step_detail">
                                    <p className="step_tit">等待好友
                                        <br/>参团支付</p>
                                </div>
                            </div>
                            <div className="step_item">
                                <div className="step_num">4</div>
                                <div className="step_detail">
                                    <p className="step_tit">达到人数
                                        <br/>团购成功</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="outs-box">
                        <h1>商品详情</h1>
                        <img src={"/"+detail.img} />
                        <img src="/images/d2.jpg" />
                        <img src="/images/d3.jpg" />
                        <img src="/images/d4.jpg" />
                    </div>
                </div> 
                <footer className="detail_footer">
                    <div className="return_left_box">
                        <a href="javascript:window.history.go(-1)"><div className="return_home fl"></div></a>
                        <Link to={{pathname:'/home'}}><div className="return_home share_tuan fl"></div></Link>    
                    </div>  
                    <Link to={{pathname:'/pay'}}><div className="promptly_tuan fl">立即去拼团</div></Link>
                    
                    <div className="cl"></div>

                </footer> 
            </div>       
        )
    }
}
const initMapStateToProps = state => ({
    detail:state.detail
})
const initMapDispatchToProps = dispatch => ({
    get: (id)=> dispatch(asyncList({
        id:id,
        type: types.UPDATE_DETAIL,
        url: '/data/pinlei.data' ,
        start:1,
        count:5
    })),
})
export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Detail);
