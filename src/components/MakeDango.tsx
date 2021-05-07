import React,{useContext} from 'react';
import {CurrentDangoContext, defaultContext} from '../Contexts/CurrentDango';


export const MakeDango = ():JSX.Element => {
    const context = useContext<defaultContext>(CurrentDangoContext);

    const shouldActivate = ():void => {
        if(context.currentDango.length === 3){
            context.activateEffects();
        }
    }

    const activateButton = ():string => {
        return context.currentDango.length === 3
        ? 'active'
        : ''
    }

    return(
        <div className={`container-make ${activateButton()}`}>
           <button onClick={() => shouldActivate()}>Make Dango</button>
        </div>
    )
}