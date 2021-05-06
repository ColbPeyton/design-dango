import React from 'react';

interface DangoEffectsProps{
    name: string;
    chance: number;
}

export const DangoEffect = (props: DangoEffectsProps):JSX.Element => {
    return(
        <div className='container-dango-effect'>
            <div className='top'>
                <h3>{props.name}</h3>
            </div>
            <div className='bot'>
                <p>Activation Chance: {props.chance}%</p>
            </div>
        </div>
    )
}