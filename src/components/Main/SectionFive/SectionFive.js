import React from 'react';
import './SectionFive.css';
import lampa from '../../../assets/images/layerslamp.png';
import klav from '../../../assets/images/layersklav.png';
import elk from '../../../assets/images/layerselk.png';

export default function SectionFive(){
    return(
    <div class="awesome">
        <div className="wrapper">
            <div class="text">
                <h2>WHY THIS IS AWESOME</h2>
                <p class="zag">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <div class="glo">
                    <div class="design">
                        <img src={lampa} alt="" class="lamp" />   
                        <h5>Thoughtful Design</h5>
                        <p >
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit. Aenean euismod bibendum laoreet. Proin gravida 
                            dolor sit amet lacus accumsan et viverra.
                        </p>
                    </div>
                    <div class="crafted">
                        <img src={klav} alt="" class="klav" />
                        <h5>Well Crafted</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit. Aenean euismod bibendum laoreet. Proin gravida 
                            dolor sit amet lacus accumsan et viverra.
                        </p>
                    </div>

                    <div class="customize">
                        <img src={elk} alt="" class="elek" />   
                        <h5>Easy to Customize</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit. Aenean euismod bibendum laoreet. Proin gravida 
                            dolor sit amet lacus accumsan et viverra.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}