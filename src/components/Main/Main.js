import React from 'react';
import BrandBar from './BrandBar/BrandBar';
import SectionTwo from './SectionTwo/SectionTwo';
import SectionThree from './SectionThree/SectionThree';
import SectionFour from './SectionFour/SectionFour';
import SectionFive from './SectionFive/SectionFive';
import SectionSix from './SectionSix/SectionSix';
import SectionSeven from './SectionSeven/SectionSeven';
import SectionEight from './SectionEight/SectionEight';
import SectionNine from './SectionNine/SectionNine';

export default function Main() {
    return(
        <div>
            <BrandBar />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
            <SectionSeven />
            <SectionEight />
            <SectionNine />
        </div>
    )
}