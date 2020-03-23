import React from 'react';
import './PricingBlock.css';

export default function PricingBlock({ header, header2, header3, item1,
item2, item3, item4, item5, item6, img}) {
    return(
        <div className="pricing__block">
            <div className="pricing__block_header">
                <h5>{header}</h5>
            </div>
            <div className="pricing__block_price">
                <img src={img} alt="" />
            </div>
            <div className="pricing__block_text">
                <h6>{header2}</h6>
            </div>
            <div className="pricing__block_orange">
                <h5>{header3}</h5>
            </div>
            <ul className="pricing__block_list">
                <li>{item1}</li>
                <li>{item2}</li>
                <li>{item3}</li>
                <li>{item4}</li>
                <li>{item5}</li>
                <li>{item6}</li>
            </ul>
        </div>
    )
}