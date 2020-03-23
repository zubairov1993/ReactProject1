import React from 'react';
import './SectionSix.css';
import basic from '../../../assets/images/_0_176.png';
import professional from '../../../assets/images/_19_149.png';
import enterprise from '../../../assets/images/_70_197.png';
import HeaderText from '../HeaderText/HeaderText';

export default function SectionSix(){
    return(
        <div class="pricing">
            <div className="wrapper">
                <div class="pricing__content">
                    <HeaderText 
                    title={'PRICING OPTIONS'}
                    text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                    />
                    <div class="pricing__blocks">
                        <div class="pricing__block_basic">
                            <div class="pricing__block_basic_header">
                                <h5>Basic</h5>
                            </div>
                            <div class="pricing__block_basic_price">
                                <img src={basic} alt="" />
                            </div>
                            <div class="pricing__block_basic_text">
                                <h6>Free for Life</h6>
                            </div>
                            <div class="pricing__block_orange"></div>
                            <ul className="pricing__block_basic_list">
                                <li>1 GB OF SPACE</li>
                                <li>10 GB OF BANDWIDTH</li>
                                <li>3 WEBSITES</li>
                                <li>BASIC CUSTOMIZATION</li>
                                <li>WORDPRESS INTEGRATION</li>
                                <li>EMAIL SUPPORT</li>
                            </ul>
                        </div>

                        <div class="pricing__block_professional">
                            <div class="pricing__block_professional_header">
                                <h5>Professional</h5>
                            </div>
                            <div class="pricing__block_professional_price">
                                <img src={professional} alt=""/>
                            </div>
                            <div class="pricing__block_professional_text">
                                <h6>Monthly Payment</h6></div>
                            <div class="pricing__block_professional_orange">
                                <h5>OUR MOST POPULAR</h5>
                            </div>
                            <ul className="pricing__block_professional_list">
                                <li>5 GB OF SPACE</li>
                                <li>50 GB OF BANDWIDTH</li>
                                <li>12 WEBSITES</li>
                                <li>ADVANCED CUSTOMIZATION</li>
                                <li>WORDPRESS INTEGRATION</li>
                                <li>EMAIL SUPPORT </li>
                            </ul>
                        </div>

                        <div class="pricing__block_enterprise">
                            <div class="pricing__block_enterprise_header">
                                <h5>Enterprice</h5>
                            </div>
                            <div class="pricing__block_enterprise_price">
                                <img src={enterprise} alt=""/>
                            </div>
                            <div class="pricing__block_enterprise_text">
                                <h6>Monthly Payment</h6>
                            </div>
                            <div class="pricing__block_orange"></div>
                            <ul className="pricing__block_enterprise_list">
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