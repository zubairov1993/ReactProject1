import React from 'react';
import './SectionSix.css';
import basic from '../../../assets/images/_0_176.png';
import professional from '../../../assets/images/_19_149.png';
import enterprise from '../../../assets/images/_70_197.png';
import HeaderText from '../HeaderText/HeaderText';
import PricingBlock from '../PricingBlock/PricingBlock';

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
                        <div className="pricing__block_basic">
                           <PricingBlock 
                           header={'Basic'}
                           header2={'Free for Life'}
                           item1={'1 GB OF SPACE'}
                           item2={'10 GB OF BANDWIDTH'}
                           item3={'3 WEBSITES'}
                           item4={'BASIC CUSTOMIZATION'}
                           item5={'WORDPRESS INTEGRATION'}
                           item6={'EMAIL SUPPORT'}
                           img={basic}
                           /> 
                        </div>
                        <div class="pricing__block_professional">
                           <PricingBlock 
                           header={'Professional'}
                           header2={'Free for Life'}
                           header3={'OUR MOST POPULAR'}
                           item1={'5 GB OF SPACE'}
                           item2={'50 GB OF BANDWIDTH'}
                           item3={'12 WEBSITES'}
                           item4={'ADVANCED CUSTOMIZATION'}
                           item5={'WORDPRESS INTEGRATION'}
                           item6={'EMAIL SUPPORT'}
                           img={professional}
                           /> 
                        </div>
                        <div class="pricing__block_enterprise">
                           <PricingBlock 
                           header={'Enterprice'}
                           header2={'Free for Life'}
                           item1={'UNLIMITED SPACE'}
                           item2={'UNLIMITED BANDWIDTH'}
                           item3={'100 WEBSITES'}
                           item4={'ADVANCED CUSTOMIZATION'}
                           item5={'WORDPRESS INTEGRATION'}
                           item6={'24/7 SUPPORT'}
                           img={enterprise}
                           /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}