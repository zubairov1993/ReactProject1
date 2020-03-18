import React from 'react';
import './Footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faInstagram,
    faTwitter,
    faFacebookF,
    faGooglePlusG,
    faPinterestP,
    faStumbleupon,
    faReact,
} from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return(
        <footer className="footer">
            <div class="iconfot">
                <div class="icon2">
                <a href="#" className='facebook social'>
                    <FontAwesomeIcon icon={faFacebookF}/>
                </a>
                <a href="#" className='twitter social'>
                    <FontAwesomeIcon icon={faTwitter}/>
                </a>
                <a href="#" className='google-plus-g social'>
                    <FontAwesomeIcon icon={faGooglePlusG}/>
                </a>
                <a href="#" className='pinterest-p social'>
                    <FontAwesomeIcon icon={faPinterestP}/>
                </a>
                <a href="#" className='instagram social'>
                    <FontAwesomeIcon icon={faInstagram}/>
                </a>
                <a href="#" className='stumbleupon social'>
                    <FontAwesomeIcon icon={faStumbleupon}/>
                </a>
                <a href="#" className='react social'>
                    <FontAwesomeIcon icon={faReact}/>
                </a>
                </div>
                <div class="raz">© 2015 Axure Themes</div>
            </div>
        </footer>
    )
}