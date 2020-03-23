import React from 'react';
import './Testimonials.css';

export default function Testimonials({text, name, post, img}) {
    return(
        <div className="testiomial">
            <div className="testiomial__text">
                <span>{text}</span>
            </div>
            <div className="testiomial__person">
                <div className="testiomial__person_img">
                    <img src={img} alt="" />
                </div>
                <div className="testiomial__person_name">
                    <h6>{name}</h6>
                    <p>{post}</p>
                </div>
            </div>
        </div>
    )
}