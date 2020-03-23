import React from 'react';
import './SectionOne.css';
import logoti from '../../../assets/images/fs.png';

export default function axit(){
    return(
        <div className="axit">
            <div className="wrapper">
                <h3>Insert your picture here</h3>
                <div className="axit__content">   
                    <div className="axit__texts">
                        <div>
                            <img src={logoti} alt="" />
                        </div>
                        <p>modern axure template for beautiful prototypes</p>
                        <div className="axit__text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                                euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                                accumsan et viverra justo commodo.
                            </p>
                            <input type="submit" value="Download" className="axit__text_btn" />
                        </div>
                    </div>
                    <div className="axit__text_form">
                        <div className="axit__text_inputs">
                            <div className="axit__text_inputs-head">
                                <p>Try Your <span className="colorfree">FREE</span> Trial Today</p>
                            </div>
                            <input type="text" value="Name" className="axit__text_input-name inp" />
                            <input type="email" value="Email" className="axit__text_input-email inp" />
                            <input type="text" value="Password" className="axit__text_input-password inp" />
                            <input type="submit" value="Get Started" className="axit__text_input-submit" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    )
}