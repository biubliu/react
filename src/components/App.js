import React,{Component} from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import * as types from '../store/types';
import Loading from '../common/Loading/Loading';

import Auth from '../guard/Auth';

import User from './User/User';
import Register from './Register/Register';
import Login from './Login/Login';
import Coupon from './Coupon/Coupon';
import GroupsDetails from './GroupsDetails/GroupsDetails';
import Home from './Home/Home';
import Detail from './Detail/Detail';
import Groups from './Groups/Groups';
import Myorder from './Myorder/Myorder';
import Footer from '../common/Footer/Footer';



class App extends Component{
    componentWillReceiveProps(nextProps){
        let path = nextProps.location.pathname;
        this.watchRouter(path)
    }
    watchRouter(path){
        let {viewFoot} = this.props;
        if(/home|groups|myorder|user/.test(path)){
            viewFoot(true)
        }
        if(/detail|coupon|login|register/.test(path)){
            viewFoot(false)
        }
    }
    componentDidMount(){
        let path = this.props.location.pathname;
        this.watchRouter(path)
    }
    render(){
        let {bLoading,bFoot} = this.props;
        return(
            <>
                {bLoading && <Loading />}
                <Switch>
                    <Route path="/home" component={Home} />
                    <Auth path="/user" component={User} />
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/groupsdetails" component={GroupsDetails} />
                    <Route path="/detail/:id" component={Detail} />
                    <Route path="/groups" component={Groups} />
                    <Route path="/coupon" component={Coupon} />
                    <Route path="/myorder" component={Myorder} />
                    <Redirect exact from="/" to="/home" />
                    <Route component={Error} />
                </Switch>
                {bFoot && <Footer/>}
            </>
        )
    }
}
const initMapStateToProps = state => ({
    bFoot: state.bFoot,
    bLoading: state.bLoading
})
const initMapDispatchToProps = dispatch => ({
    viewFoot:(bl)=>dispatch({type:types.VIEW_FOOT,payload:bl})
})
export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(App);