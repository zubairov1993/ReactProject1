import React from 'react';
import './SectionSix.css';
import basic from '../../../assets/images/_0_176.png';
import professional from '../../../assets/images/_19_149.png';
import enterprise from '../../../assets/images/_70_197.png';

export default function SectionSix(){
    return(
        <div class="pricing">
            <div className="wrapper">
                <div class="options">
                    <h2>PRICING OPTIONS</h2>
                    <p class="opt">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div class="blocks">
                        <div class="basic">
                            <div class="card_header">
                                <h5>Basic</h5>
                            </div>
                            <div class="card_price">
                                <img src={basic} alt="" />
                            </div>
                            <div class="card_sub_text">
                                <h6>Free for Life</h6>
                            </div>
                            <div class="u273"></div>
                            <ul className="basic__list">
                                <li>1 GB OF SPACE</li>
                                <li>10 GB OF BANDWIDTH</li>
                                <li>3 WEBSITES</li>
                                <li>BASIC CUSTOMIZATION</li>
                                <li>WORDPRESS INTEGRATION</li>
                                <li>EMAIL SUPPORT</li>
                            </ul>
                        </div>

                        <div class="professional">
                            <div class="card_headerprof">
                                <h5>Professional</h5>
                            </div>
                            <div class="card_priceprof">
                                <img src={professional} alt=""/>
                            </div>
                            <div class="card_sub_textprof">
                                <h6>Monthly Payment</h6></div>
                            <div class="u319">
                                <h5>OUR MOST POPULAR</h5>
                            </div>
                            <ul className="professional__list">
                                <li>5 GB OF SPACE</li>
                                <li>50 GB OF BANDWIDTH</li>
                                <li>12 WEBSITES</li>
                                <li>ADVANCED CUSTOMIZATION</li>
                                <li>WORDPRESS INTEGRATION</li>
                                <li>EMAIL SUPPORT </li>
                            </ul>
                        </div>

                        <div class="enterprise">
                            <div class="card_headerrise">
                                <h5>Enterprice</h5>
                            </div>
                            <div class="card_pricerise">
                                <img src={enterprise} alt=""/>
                            </div>
                            <div class="card_sub_textrise">
                                <h6>Monthly Payment</h6>
                            </div>
                            <div class="u273"></div>
                            <ul className="enterprice__list">
                                <li>UNLIMITED SPACE</li>
                                <li>UNLIMITED BANDWIDTH</li>
                                <li>100 WEBSITES</li>
                                <li>ADVANCED CUSTOMIZATION</li>
                                <li>WORDPRESS INTEGRATION</li>
                                <li>24/7 CUSTOMER SUPPORT</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}