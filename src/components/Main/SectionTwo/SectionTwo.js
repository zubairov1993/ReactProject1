import React from 'react';
import './SectionTwo.css';
import city from '../../../assets/images/image_right_u255_70.png'

export default function SectionTwo(){
    return(
        
        <div className="features">
            <div className="wrapper">
                <ul className="features__form">
                    <li><input type="submit" value="TAB1" className="tab1" /></li>
                    <li><input type="submit" value="TAB2" className="tab2" /></li>
                    <li><input type="submit" value="TAB3" className="tab3" /></li>
                </ul>
                <div className="features__efect">
                    <div className="features__efect-text">
                        <h5>Tabs with soft transitioning effect.</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod 
                            bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra 
                            justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque 
                            penatibus et magnis dis parturient montes.<br /> <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod 
                            bibendum laoreet.
                        </p>
                        <div className="features__efect_btns">
                            <input type="submit" value="Download" className="features__efect_btn" />
                        </div>
                    </div>
                    <div className="features__efect-img">
                        <img src={city} alt="" className="features__efect-imgcity" />
                    </div>
                </div>
            </div>
        </div>
    )
}