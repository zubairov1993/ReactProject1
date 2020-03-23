import React from 'react';
import './BrandBar.css';
import Icons from '../Icons/Icons';

export default function BrandBar(){
    return(
        <div className="brandbar">
            <div className="wrapper">
                <div className="brandbar__social">
                    <h5>Social Media</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Aenean euismod bibendum laoreet.
                    </p>
                </div>
                <Icons />
            </div>
        </div>
       
    )
}