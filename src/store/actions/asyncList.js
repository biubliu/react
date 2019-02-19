
import * as types from '../types';

const asyncList=({type,url,start,count,id,bid,aid})=>(dispatch,getState)=>{

    dispatch({type:types.VIEW_LOADING,payload:true});
    fetch(
      url,
      {
        method:'post',
        headers:{"Content-type":"application/x-www-form-urlencoded"},
        credentials:'include',//允许带cookie
        body:{
          start:start,
          count:count
        }
      }
    ).then(
      res=>res.json()
    ).then(
      data=>{
        dispatch({type:types.VIEW_LOADING,payload:false});
        if (id){
          dispatch({
            type:type,
            payload:{data,id}
          })
        } else if(bid>=0){ 
            dispatch({type:type,payload:data[bid]})
          
          }else{
            dispatch({type:type,payload:data})
          }
        
  
      }
    )
  };
export default asyncList;