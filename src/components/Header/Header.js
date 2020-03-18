import React from 'react';
import './Header.css';
import NavMenu from './NavMenu/NavMenu';
import SectionOne from './SectionOne/SectionOne';

export default function Header(){
    return(
        <div className="header">
            <NavMenu />
            <SectionOne />
        </div>
    )
}