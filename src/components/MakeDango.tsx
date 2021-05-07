import React,{useContext} from 'react';
import {CurrentDangoContext, defaultDango} from '../Contexts/CurrentDango';

interface DangoStickProps{
    currentDango: defaultDango[];
    addDango: (id:defaultDango)=> void;
    removeDango: (id:number)=> void;
    isLocatedInDango: (id:number)=> boolean;
    resetDango: () => void;
}
 

export const MakeDango = ():JSX.Element => {
    return(
        <div className='container-make-dango'>
           
        </div>
    )
}