import React from 'react';
import '../styles/Header.scss';

export const Header  = ():JSX.Element => {
    return(
        <div className='container-header'>
            <div className='contatiner-top-btn'>
                <button className='btn'>
                    reset
                </button>
            </div>
            <div className='container-logo'>
                <h2>Dango Designer</h2>
            </div>
            <div className='contatiner-top-btn'>
                <button className='btn'>
                    top
                </button>
            </div>
        </div>
    )
}