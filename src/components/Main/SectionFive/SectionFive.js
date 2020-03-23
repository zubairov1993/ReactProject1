import React from 'react';
import './SectionFive.css';
import lampa from '../../../assets/images/layerslamp.png';
import klav from '../../../assets/images/layersklav.png';
import elk from '../../../assets/images/layerselk.png';
import HeaderText from '../HeaderText/HeaderText';
import AwesomeBlock from '../AwesomeBlock/AwesomeBlock';

export default function SectionFive(){
    return(
    <div className="awesome">
        <div className="wrapper">
            <div className="awesome__content">
                <HeaderText 
                title={'WHY THIS IS AWESOME'}
                text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                />
                <div className="awesome__blocks">
                    <AwesomeBlock 
                    title={'Thoughtful Design'}
                    text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra.'}
                    img={lampa}
                    />
                    <AwesomeBlock 
                    title={'Well Crafted'}
                    text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra.'}
                    img={klav}
                    />
                    <AwesomeBlock 
                    title={'Easy to Customize'}
                    text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra.'}
                    img={elk}
                    />
                </div>
            </div>
        </div>
    </div>
    )
}