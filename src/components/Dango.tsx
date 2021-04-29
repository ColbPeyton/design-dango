import React,{useContext, useState} from 'react';
import temp from '../assets/powerful/temp.jpg';
import {CurrentDangoContext} from '../Contexts/CurrentDango';

interface DangoProps{
    dango: {
        id: number,
        name: string,
        skill: string,
        img: string,
        activationPercent: number,
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
        return isActive
        ? 'active'
        : ''
    }

    const addOrRemoveFromContext = ():void => {
        if(isActive){
            context.removeDango(props.dango.id);
            setIsActive(false)
        }else{
            context.addDango(props.dango.id);
            setIsActive(true);
        }
    }
    return(
        <button 
            className={`container-dango ${updateStylingIfActive()}`} 
            onClick={()=> addOrRemoveFromContext()}
        >
            <div className='dango-img'>
                <img src={temp} alt={props.dango.name} />
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