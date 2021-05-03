import React,{useContext, useState} from 'react';
import {CurrentDangoContext} from '../Contexts/CurrentDango';
import '../styles/Dango.scss';

interface DangoProps{
    dango: {
        id: number,
        name: string,
        skill: string,
        img: any,
        activationChance: number,
        effect: string,
        dailySpecial: boolean,
    }
}


interface DangoState{
    isActive:boolean;
}


export const Dango = (props: DangoProps):JSX.Element => {
    const context = useContext(CurrentDangoContext)
    const [isActive, setIsActive] = useState<DangoState['isActive']>(context.isLocatedInDango(props.dango.id))

    const updateStylingIfActive = ():string => {
        return isActive && context.isLocatedInDango(props.dango.id)
        ? 'active'
        : ''
    }

    const addOrRemoveFromContext = ():void => {
        if(isActive){
            context.removeDango(props.dango.id);
            setIsActive(false)
        }else{
            context.addDango(props.dango);
            setIsActive(true);
        }
    }

    return(
        <button 
            className={`container-dango ${updateStylingIfActive()}`} 
            onClick={()=> addOrRemoveFromContext()}
        >
            <div className='dango-img'>
                <img src={props.dango.img.default} alt={props.dango.name} />
            </div>
            <div className='dango-info'>
                <div className='name'>
                    <h3>{props.dango.name}</h3>
                </div>
                <div className='skill'>
                    <p>{props.dango.skill}</p>
                </div>
            </div>
        </button>
    )
}