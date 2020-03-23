import React from 'react';
import './PricingBlock.css';

export default function PricingBlock({ header, header2, item1,
item2, item3, item4, item5, item6}) {
    return(
        <div class="pricing__block_basic">
            <div class="pricing__block_basic_header">
                <h5>{header}</h5>
            </div>
            <div class="pricing__block_basic_price">
                <img src={basic} alt="" />
            </div>
            <div class="pricing__block_basic_text">
                <h6>{header2}</h6>
            </div>
            <div class="pricing__block_orange"></div>
            <ul className="pricing__block_basic_list">
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