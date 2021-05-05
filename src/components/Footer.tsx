import React from 'react';
import '../styles/Footer.scss';
const link = 'https://colbypeyton.com/'

export const Footer = ():JSX.Element => {
    return(
        <div className='container-footer'>
            <div className='top'>
                <p>I like Monster Hunter.</p> <p>Please don't sue me.</p>
            </div>
            <div className='bot'>
                <p>Developed by <a href={link}>ColbPeyton</a></p>
            </div>
        </div>
    )
}