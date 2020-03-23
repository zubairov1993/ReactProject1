import React from 'react';
import './SectionSeven.css';
import gray from '../../../assets/images/Gray.png'
import HeaderText from '../HeaderText/HeaderText';
import Testimonials from '../Testimonials/Testimonials';

export default function SectionSeven(){
    return(
        <div className="testimonials">
            <div className="wrapper">
                <div className="testimonials__content">
                    <HeaderText 
                    title={'WHAT OUR CUSTOMERS ARE SAYING'}
                    text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                    />
                    <div className="testimonials__blocks">
                        <div className="testimonial-1">
                            <Testimonials 
                            text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus accusamus expedita repellat similique odio aspernatur ex, architecto eaque quo suscipit.'}
                            name={'Jeremy H.'}
                            post={'Manager'}
                            img={gray}
                            />
                        </div>
                        <div className="testimonial-2">
                            <Testimonials 
                            text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus accusamus expedita repellat similique odio aspernatur ex, architecto eaque quo suscipit.'}
                            name={'John S.'}
                            post={'Freelancer'}
                            img={gray}
                            />
                        </div>
                        <div className="testimonial-3">
                            <Testimonials 
                            text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus accusamus expedita repellat similique odio aspernatur ex, architecto eaque quo suscipit.'}
                            name={'Susan W.'}
                            post={'Photographer'}
                            img={gray}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}