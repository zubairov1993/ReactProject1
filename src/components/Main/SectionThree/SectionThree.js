import React from 'react';
import './SectionThree.css';
import layerbot from '../../../assets/images/layersb.png';
import layertop from '../../../assets/images/layerst.png';

export default function SectionThree(){
    return(
        <div class="blockinsert">
            <div className="wrapper">
                <div className="insertBlock">
                    <div class="insert">
                        <div class="insert1">Insert your picture here</div>
                    </div>
                </div>
                <div class="section">
                    <h5 class="h5">Sub list section</h5>
                    <p class="p1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean 
                        euismod bibendum laoreet. Proin gravida dolor sit amet lacus 
                        accumsan et viverra justo commodo.
                    </p>
                    <div class="top">
                        <img src={layertop} class="log" />
                        <div class="p2">
                            <h6>Title</h6>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Aenean euismod bibendum laoreet.
                            </p>
                        </div>
                    </div>
                    <div class="bot">
                        <img src={layerbot} alt="" class="log" />
                        <div class="p3">
                            <h6>Title</h6>
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
