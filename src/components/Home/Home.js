import React,{Component} from 'react';
import './Home.css';
import ReactSwipe from 'react-swipe';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import asyncList from '../../store/actions/asyncList';
import * as types from '../../store/types';

class Home extends Component{
    componentDidMount(){
        this.props.get()
    }
    render(){
        let {home} = this.props
        return(
            <>
               
                <nav className="j-nav navbar index-nav">
                    <div className="logo fl">
                        <a href="javascript:void(0);"></a>
                    </div>
                    <div className="city">
                        <a id="showSiteBtn" href="javascript:;" target="_self">广州</a>
                        <input id="switchGPS" name="switchGPS" type="hidden"/>
                    </div>
                </nav>
                <ReactSwipe
                    className="carousel"
                    swipeOptions={{
                        continuous: true,
                        auto: 1000,

                    }}
                    >
                    <div> 
                        <img src="images/j-banner02.jpg" />
                    </div>
                    <div>
                         <img src="images/j-banner04.jpg" />
                    </div>
                   
                </ReactSwipe>
                <div className="j-component-func" id="m-banner">
                    <ul className="list-unstyled" id="categoryMenu">
                        <li className="route1 route"><a href="register.html"><span className="glyphicon fdayicon fdayicon-all"></span>新用户</a></li>
                        <li className="route2 route"><a href="meal.html"><span className="glyphicon fdayicon fdayicon-order"></span>套餐</a></li>
                        <li className="route3 route"><a href="invite.html"><span className="glyphicon fdayicon fdayicon-contact"></span>邀请红包</a></li>
                        <li className="route4 route"><a href="#"><span className="glyphicon fdayicon fdayicon-client"></span>企业团购</a></li>
                    </ul>
                </div>
                <div className="j-component-bestsell">
                    <ul className="list-unstyled">
                        <li><a href="javascript:void(0);"><img className="lazy" src="images/j-c03.jpg" /></a></li>
                    </ul>
                </div>
                <div id="tuan" className="tuan">
                   { 
                       home.map(item=>(
                       
                                <div className="tuan_g" data-vtuan="0" data-cat="1" data-name={item.id} key={item.id}>
                                    <i></i>
                                    <Link to={{pathname:'/detail/'+item.id}}>
                                        <div className="tuan_g_img">
                                            <div className="tally_box">
                                                <p>3人团</p>
                                                <p>2.5折</p>
                                            </div>
                                            <img src={item.img} />
                                        </div>
                                        <div className="tuan_g_info">
                                            <p className="tuan_g_name">{item.title} </p>
                                            <p style={{display:" black"}} className="tuan_g_cx">
                                                 {item.miaoshu}
                                            </p>
                                        </div>
                                        
                                        <div className="tuan_g_core">
                                            <div id="triangle-right"></div>
                                            <div className="tuan_g_price">
                                                <span>3人团只需</span>
                                                <b>¥{item.price}</b>
                                            </div>
                                            <div className="tuan_g_btn">我要拼</div>
                                        </div>
                                        <div className="tuan_g_yj"><s>原价:￥{item.oldprice}</s></div>
                                    </Link>
                                </div>
                            
                       ))
                       
                     }
                 </div>
            </>
        )
    }
}
const initMapStateToProps = state => ({
    home: state.home
})
const initMapDispatchToProps = dispatch => ({
    get: ()=>dispatch(asyncList({
        url: '/data/pinlei.data',
        type: types.UPDATE_HOME
    }))
})

export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Home);