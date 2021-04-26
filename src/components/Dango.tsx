import React from 'react';


interface DangoProps{
    id: number;
    name: string;
    color: string;
    activationPercent: number;
    effect: string;
}

export const Dango = (props: DangoProps):JSX.Element => {
    return(
        <div className='container-dango'>
            {props.name}
            {props.color}
            {props.activationPercent}
            {props.effect}
        </div>
    )
}