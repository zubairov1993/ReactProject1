import React from 'react';
import './SectionTwo.css';
import city from '../../../assets/images/image_right_u255_70.png'

export default function SectionTwo(){
    return(
        
        <div class="features">
            <div className="wrapper">
                <form class="formtab" action="">
                    <ul className="buttonsInput">
                        <li><input type="submit" value="TAB1" class="tab1" /></li>
                        <li><input type="submit" value="TAB2"class="tab2" /></li>
                        <li><input type="submit" value="TAB3" class="tab3" /></li>
                    </ul>
                </form>
                <div class="efect">
                    <div className="efect-text">
                        <h5>Tabs with soft transitioning effect.</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod 
                            bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra 
                            justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque 
                            penatibus et magnis dis parturient montes.<br /> <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod 
                            bibendum laoreet.
                        </p>
                        <div class="download2">
                            <input type="submit" value="Download" class="download1" />
                        </div>
                    </div>
                    <div className="efect-img">
                        <img src={city} alt="" class="imgcity" />
                    </div>
                </div>
            </div>
        </div>
    )
}