import React from 'react';
import './SectionNine.css';

export default function SectionNine(){
    return(
        <div class="contact_us">
            <div className="wrapper">
                <h1>CONTACT US</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div class="panel">
                    <div class="panel_g">
                        <div class="name1">
                            <input type="text" value="Name" />
                        </div>
                        <div class="email1">
                            <input type="text" value="Email" />
                        </div>
                        <div class="subject1">
                            <input type="text" value="Subject" />
                        </div>
                    </div>
                    <div class="panel_h">
                        <div class="panep">
                            <div class="message1">Message</div>
                            <input type="text" class="message" />
                        </div>
                    </div>
                </div>
                <div className="btn__download">
                    <input type="submit" value="Send Message" class="button" />
                </div>
            </div>
        </div>
    )
}