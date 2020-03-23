import React from 'react';
import './AwesomeBlock.css';

export default function AwesomeBlock({ title, text, img}) {
    return(
        <div className="awesome__block">
            <img src={img} alt="" className="lamp" />   
            <h5>{title}</h5>
            <p >
                {text}
            </p>
        </div>
    )
}