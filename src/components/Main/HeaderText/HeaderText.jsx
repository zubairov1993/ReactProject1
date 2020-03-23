import React from 'react'
import './HeaderText.css'

const HeaderText = ({ title, text}) => {
    return(
        <div className='HeaderText'>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}

export default HeaderText