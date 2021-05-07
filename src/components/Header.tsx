import React,{useContext} from 'react';
import {CurrentDangoContext, defaultDango, defaultContext} from '../Contexts/CurrentDango';
import '../styles/Header.scss';

export const Header  = ():JSX.Element => {

    const context = useContext<defaultContext>(CurrentDangoContext);

    const resetDango = ():void => {
        context.resetDango();
        context.resetActiveEffect();
    }

    return(
        <div className='container-header'>
            <div className='contatiner-top-btn'>
                <button className='btn' onClick={()=> resetDango()}>
                    <i className="fas fa-redo"></i>
                </button>
            </div>
            <div className='container-logo'>
                <h2>Dango Designer</h2>
            </div>
            <div className='contatiner-top-btn'>
                <button className='btn'>
                    <i className="fas fa-arrow-up"></i>
                </button>
            </div>
        </div>
    )
}