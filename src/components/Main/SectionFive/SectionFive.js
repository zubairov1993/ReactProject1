import React from 'react';
import './SectionFive.css';
import lampa from '../../../assets/images/layerslamp.png';
import klav from '../../../assets/images/layersklav.png';
import elk from '../../../assets/images/layerselk.png';
import HeaderText from '../HeaderText/HeaderText';

export default function SectionFive(){
    return(
    <div className="awesome">
        <div className="wrapper">
            <div className="awesome__content">
                <HeaderText 
                title={'WHY THIS IS AWESOME'}
                text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                />
                <div className="awesome__blocks">
                    <div className="awesome__block-design">
                        <img src={lampa} alt="" className="lamp" />   
                        <h5>Thoughtful Design</h5>
                        <p >
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit. Aenean euismod bibendum laoreet. Proin gravida 
                            dolor sit amet lacus accumsan et viverra.
                        </p>
                    </div>
                    <div className="awesome__block-crafted">
                        <img src={klav} alt="" className="klav" />
                        <h5>Well Crafted</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit. Aenean euismod bibendum laoreet. Proin gravida 
                            dolor sit amet lacus accumsan et viverra.
                        </p>
                    </div>

                    <div className="awesome__block-customize">
                        <img src={elk} alt="" className="elek" />   
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