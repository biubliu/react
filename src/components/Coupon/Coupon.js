import React,{Component} from 'react';
import {connect} from 'react-redux';
import List from '../../common/List/List';
import asyncList from '../../store/actions/asyncList';
import * as types from '../../store/types';


class Coupon extends Component{
    constructor(props){
        super()
        props.get(1);
        this.state={
            active:1,
        }
       
    }
    index(bid){
        this.setState({
            active:bid
        });
        this.props.get(bid);
    }
    render(){
        let {coupon} = this.props;
        return(
            <div id="user-b">
                <nav className="j-nav navbar">
                    <div className="logo fl">
                        <a href="javascript:window.history.go(-1)"></a>
                    </div>
                    <span className="user-title">优惠卷</span>
                    <div className="shopping-cart fr">
                        <a href="index.html"></a>
                    </div>
                </nav>
                <div className="coupon-tab">
                    <div className="coupon-nav">
                        <ul id="tab_btn" className="coupon-list">
                            <li className={this.state.active=='1'?"pick":''} onClick={()=>{this.index(1)}}>未使用</li>
                            <li className={this.state.active=='2'?"pick":''} onClick={()=>{this.index(2)}}><span className="bar"></span>已使用</li>
                            <li className={this.state.active=='3'?"pick":''} onClick={()=>{this.index(3)}}><span className="bar"></span>已过期</li>
                        </ul>
                        <div className="cl"></div>
                    </div> 
	            </div>  
                <List list={coupon} out={this.state.active} />
            </div>    
        )
    }
}
const initMapStateToProps = state => ({
    coupon: state.coupon
})
const initMapDispatchToProps = dispatch => ({
    get: (bid)=> dispatch(asyncList({
        bid:bid,
        url: 'http://localhost:8200/couponun',
        type: types.UPDATE_COUPON
        }))
    })
export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Coupon);