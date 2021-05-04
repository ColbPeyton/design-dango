import React from 'react';

export const Header  = ():JSX.Element => {
    return(
        <div className='container-header'>
            <div className='contatiner-reset-btn'>
                <button id='reset-btn'>
                    reset
                </button>
            </div>
            <div className='container-logo'>
                <h2>Dango Designer</h2>
            </div>
            <div className='contatiner-top-btn'>
                <button id='top-btn'>
                    top
                </button>
            </div>
        </div>
    )
}