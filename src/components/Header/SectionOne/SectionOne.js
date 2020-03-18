import React from 'react';
import './SectionOne.css';
import logoti from '../../../assets/images/fs.png';

export default function SectionOne(){
    return(
        <div className="sectionOne">
            <div className="wrapper">
                <h3>Insert your picture here</h3>
                <div className="sectionOne__content">   
                    <div class="sectionOne__texts">
                        <div>
                            <img src={logoti} alt="" />
                        </div>
                        <p>modern axure template for beautiful prototypes</p>
                        <div class="sectionOne__text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                                euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                                accumsan et viverra justo commodo.
                            </p>
                            <input type="submit" value="Download" class="sectionOne__text_btn" />
                        </div>
                    </div>
                    <div className="sectionOne__text_form">
                        <div class="sectionOne__text_inputs">
                            <div class="sectionOne__text_inputs-head">
                                <p>Try Your <span class="colorfree">FREE</span> Trial Today</p>
                            </div>
                            <input type="text" value="Name" class="sectionOne__text_input-name inp" />
                            <input type="email" value="Email" class="sectionOne__text_input-email inp" />
                            <input type="text" value="Password" class="sectionOne__text_input-password inp" />
                            <input type="submit" value="Get Started" class="sectionOne__text_input-submit" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    )
}