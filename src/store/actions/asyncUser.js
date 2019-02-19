import * as types from '../types';

const asyncUser = ({url,username,password})=>(dispatch,getState)=>{
    dispatch({type:types.VIEW_LOADING,payloady:true})

    
    return fetch(
        url,
        {
            method:'post',
            headers:{"Content-type":"applicantion/x-www-from-urlencoded"},
            credentials:'include',
            body:{
                username:username,
                password:password
            }
        }
    ).then(
        res=> res.json()
    ).then(
        data=> {
            console.log(data)
            dispatch({type:types.VIEW_LOADING,payload:false});
            dispatch({type:types.CHECK_USER,payload:data});
            return data.auth
        }
    )

};
export default asyncUser;