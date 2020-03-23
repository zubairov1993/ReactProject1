import React from 'react';
import './SectionEight.css';
import HeaderText from '../HeaderText/HeaderText';

export default function SectionEight(){
    return(
        <div class="custom">
            <HeaderText 
            title={'STYLISH AXURE DESIGN'}
            text={"Use the sections you need, remove the ones you don't.  Create gorgeous prototypes faster than ever!"}
            />
            <input type="sibmit" value="Download" class="submit" />
            <p class="custop">Insert your picture here</p>
        </div>
    )
}