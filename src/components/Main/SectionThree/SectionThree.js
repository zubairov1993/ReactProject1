import React from 'react';
import './SectionThree.css';
import layerbot from '../../../assets/images/layersb.png';
import layertop from '../../../assets/images/layerst.png';
import BlockGray from '../BlockGray/BlockGray';

export default function SectionThree(){
    return(
        <div className="blockinsert">
            <div className="wrapper">
                <BlockGray />
                <div className="blockinsert__section">
                    <h5 className="blockinsert__section-h5">Sub list section</h5>
                    <p className="blockinsert__section_text1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean 
                        euismod bibendum laoreet. Proin gravida dolor sit amet lacus 
                        accumsan et viverra justo commodo.
                    </p>
                    <div className="blockinsert__section-top">
                        <img src={layertop} className="blockinsert__section-log" />
                        <div className="blockinsert__section_text2">
                            <h6 className="blockinsert__section-h6">Title</h6>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Aenean euismod bibendum laoreet.
                            </p>
                        </div>
                    </div>
                    <div className="blockinsert__section-bot">
                        <img src={layerbot} alt="" className="blockinsert__section-log" />
                        <div className="blockinsert__section_text3">
                            <h6 className="blockinsert__section-h6">Title</h6>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Aenean euismod bibendum laoreet. Proin gravida dolor 
                                sit amet lacus accumsan et viverra justo commodo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
