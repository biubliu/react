import React,{Component} from 'react';
const MyorderList = ({list}) =>(
   
    <div className="myorder-content">
		<ul>
			<li className="mc-all cc-one tab_content show">
				<ul>
                    {
                        list.map((item,index)=>(
                            <li key={index}>
                                <a href="orderdetails.html">
                                    <div className="mc-sum-box">
                                        <div className="myorder-sum fl"><img src={item.img} /></div>
                                        <div className="myorder-text">
                                            <h1>{item.title}</h1>
                                            <h2>规格：{item.weight}</h2>
                                            <div className="myorder-cost">
                                                <span>数量:{item.num}</span>
                                                <span className="mc-t">￥{item.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mc-sum-Am">
                                        共{item.num}件商品，免运费<span>实付：<span className="mc-t">￥{item.pocket}</span></span>
                                    </div>
                                    <h3>{item.payment}</h3>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </li>
        </ul>
    </div>                
)
export default MyorderList;