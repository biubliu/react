import React,{Component} from 'react';
import MyorderList from '../../common/MyorderList/MyorderList';
import {connect} from 'react-redux';
import * as types from '../../store/types';
import asyncList from '../../store/actions/asyncList';

class Myorder extends Component{
    constructor(props){
        super()
        this.state={
            active: 0
        }


        
    }
    index(bid){
        this.setState({
            active: bid
        })
        this.props.get(bid)
    }
    componentDidMount(){
        this.props.get(0);
    }
    render(){
        let {myorder} = this.props;
        return(
            <div id="user-b">
                <nav className="j-nav navbar">
                    <div className="logo fl">
                        <a href="javascript:window.history.go(-1)"></a>
                    </div>
                    <span className="user-title">我的订单</span>
                    <div className="shopping-cart fr">
                        <a href="javascript:window.history.go(-1)"></a>
                    </div>
                </nav>
                <div className="myorder-tab">
                    <div className="myorder-nav">
                        <ul id="tab_btn" className="coupon-list">
                            <li className={this.state.active == 0 ? 'pick' : ''} onClick={()=>this.index(0)}>全部订单</li>
                            <li className={this.state.active == 1 ? 'pick' : ''} onClick={()=>this.index(1)}><span className="bar"></span>待付款</li>
                            <li className={this.state.active == 2 ? 'pick' : ''} onClick={()=>this.index(2)}><span className="bar"></span>待收货</li>
                        </ul>
                        <div className="cl"></div>
                    </div>
                    <MyorderList list={myorder} />
                </div>
            </div>        
        )
    }
}
const initMapStateToProps = state => ({
    myorder:state.myorder
})
const initMapDispatchToProps = dispatch => ({
    get: (bid)=>dispatch(asyncList({
        bid,
        url: 'http://localhost:8200/myorder',
        type: types.UPDATE_MYORDER
    }))
})
export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Myorder);