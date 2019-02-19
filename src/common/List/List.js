import React,{Component} from 'react';
import './List.css';
import {Link} from 'react-router-dom';

const List = ({list,out}) => (
            <div className="coupon-content">
		    	<ul>
		    		<li className="cc-all cc-one tab_content show">
		    			<ul>
                            {
                                list.map((item,index)=>(
                                    <li key={index}>
                                        <div className="coupon-sum fl"><img src={item.img} className={out==3 ?"gray":''}/></div>
                                        <div className="coupon-text">{item.title}<br/><span>{item.indate}</span></div>
                                    </li>    
                                ))
                            }
                        </ul>
                    </li>
                </ul>
            </div>                
)
export default List;