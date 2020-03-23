import React from 'react';
import './SectionSeven.css';
import gray from '../../../assets/images/Gray.png'
import HeaderText from '../HeaderText/HeaderText';

export default function SectionSeven(){
    return(
        <div class="testimonials">
            <div className="wrapper">
                <div class="what">
                    <HeaderText 
                    title={'WHAT OUR CUSTOMERS ARE SAYING'}
                    text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                    />
                    <div class="testimonial">
                        <div class="testiomial1">
                            <div class="blo">
                                <span>
                                    Lorem ipsum dolor sit amet, 
                                    consectetur adipisicing elit. Doloribus 
                                    accusamus expedita repellat similique 
                                    odio aspernatur ex, architecto eaque 
                                    quo suscipit.
                                </span>
                            </div>
                            <div class="two">
                                <div class="imgj">
                                    <img src={gray} alt="" />
                                </div>
                                <div class="namej">
                                    <h6>Jeremy H.</h6>
                                    <p>Manager</p>
                                </div>
                            </div>
                        </div>

                        <div class="testiomial2">
                            <div class="blo2">
                                <span>
                                    Lorem ipsum dolor sit amet, 
                                    consectetur adipisicing elit. Doloribus 
                                    accusamus expedita repellat similique 
                                    odio aspernatur ex, architecto eaque 
                                    quo suscipit.
                                </span>
                            </div>
                            <div class="two">
                                <div class="imgj">
                                    <img src={gray} alt="" />
                                </div>
                                <div class="jonh">
                                    <h6>John S.</h6>
                                    <p>Freelancer</p>
                                </div>
                            </div>
                        </div>

                        <div class="testiomial3">
                            <div class="blo3">
                                <span>
                                    Lorem ipsum dolor sit amet, 
                                    consectetur adipisicing elit. Doloribus 
                                    accusamus expedita repellat similique 
                                    odio aspernatur ex, architecto eaque 
                                    quo suscipit.
                                </span>
                            </div>
                            <div class="two">
                                <div class="imgj">
                                    <img src={gray} alt="" />
                                </div>
                                <div class="susan">
                                    <h6>Susan W.</h6>
                                    <p>Photographer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}