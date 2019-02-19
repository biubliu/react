import React,{Component} from 'react';
import './Loading.css';

const Loading = ({list}) => (
    <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
    </div>
)
export default Loading;