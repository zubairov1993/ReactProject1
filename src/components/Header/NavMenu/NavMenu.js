import React from 'react';
import './NavMenu.css';
import logot from '../../../assets/images/Logo.png'

export default function NavMenu(){
    return(
        <div className="navigation">
            <div className="wrapper">
                <div class="navigation__bar">
                    <div class="navigation__image">
                        <img src={logot} alt="logo" />                    
                    </div>
                    <nav>   
                        <div class="navigation__links" id="myTopnav">
                            <a href="#">Features</a>
                            <a href="#">About</a>
                            <a href="#">Pricing</a>
                            <a href="#">Reviews</a>
                            <a href="#">Contact</a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        
    )
}