import React from 'react';
import './Footer.css';
import Icons from '../Main/Icons/Icons';

export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer__icons">
                <Icons />
                <div className="footer__text">© 2015 Axure Themes</div>
            </div>
        </footer>
    )
}