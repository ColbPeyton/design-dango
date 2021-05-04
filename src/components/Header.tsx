import React,{useContext} from 'react';
import {CurrentDangoContext, defaultDango} from '../Contexts/CurrentDango';
import '../styles/Header.scss';

interface DangoStickProps{
    currentDango: defaultDango[];
    addDango: (id:defaultDango)=> void;
    removeDango: (id:number)=> void;
    isLocatedInDango: (id:number)=> boolean;
    resetDango: () => void;
}


export const Header  = ():JSX.Element => {

    const context = useContext<DangoStickProps>(CurrentDangoContext);

    return(
        <div className='container-header'>
            <div className='contatiner-top-btn'>
                <button className='btn' onClick={()=> context.resetDango()}>
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