import React from 'react';


interface DangoProps{
    id: number;
}

interface DangoState{
    name: string;
    color: string;
    activationPercent: number;
    effect: string;
}

export const Dango = (props: DangoProps, state: DangoState):JSX.Element => {
    return(
        <div className='container-dango'>
            {props.id}
            {state.name}
            {state.color}
            {state.activationPercent}
            {state.effect}
        </div>
    )
}