import React from 'react';
import './SectionEight.css';
import HeaderText from '../HeaderText/HeaderText';

export default function SectionEight(){
    return(
        <div className="custom">
            <HeaderText 
            title={'STYLISH AXURE DESIGN'}
            text={"Use the sections you need, remove the ones you don't.  Create gorgeous prototypes faster than ever!"}
            />
            <input type="sibmit" value="Download" className="custom__btn" />
            <p className="custom__text">Insert your picture here</p>
        </div>
    )
}