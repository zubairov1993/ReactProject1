import React from 'react';
import './SectionFour.css';
import BlockGray from '../BlockGray/BlockGray';

export default function SectionFour(){
    return(
        <div className="standard">
            <div className="wrapper">
                <div className="standar__content">
                    <h5 className="standar__content-h5">Standard Picture Section</h5>
                    <p className="standar__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean 
                        euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan 
                        et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis 
                        natoque penatibus et magnis dis parturient montes.<br /><br />

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod 
                        bibendum laoreet.
                    </p>
                </div>
                <BlockGray />
            </div>
        </div>
        

    )
}
