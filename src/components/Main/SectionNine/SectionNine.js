import React from 'react';
import './SectionNine.css';
import HeaderText from '../HeaderText/HeaderText';

export default function SectionNine(){
    return(
        <div className="contact">
            <div className="wrapper">
                <HeaderText 
                title={'CONTACT US'}
                text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                />
                <div className="contact__forms">
                    <div className="contact__form_1">
                        <div className="contact__form_1_name">
                            <input type="text" value="Name" />
                        </div>
                        <div className="contact__form_1_email">
                            <input type="text" value="Email" />
                        </div>
                        <div className="contact__form_1_subject">
                            <input type="text" value="Subject" />
                        </div>
                    </div>
                    <div className="contact__form_2">
                        <div className="contact__form_2_blok">
                            <div className="contact__form_2_blok-title">Message</div>
                            <input type="text" className="contact__form_2_blok-message" />
                        </div>
                    </div>
                </div>
                <div className="contact__buttons">
                    <input type="submit" value="Send Message" className="contact__btn" />
                </div>
            </div>
        </div>
    )
}