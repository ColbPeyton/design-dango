import React from 'react';

interface DangoEffectsProps{
    name?: string;
    chance?: number;
}

export const DangoEffect = (props: DangoEffectsProps):JSX.Element => {
    const renderName = ():string => {
        return props.name
        ? props.name
        : ''
    }
    const renderActivationChance = ():string => {
        return props.chance
        ? `Activation Chance: ${props.chance}%`
        : ''
    }
    return(
        <div className='container-dango-effect'>
            <div className='top'>
                <h3>{renderName()}</h3>
            </div>
            <div className='bot'>
                <p>{renderActivationChance()}</p>
            </div>
        </div>
    )
}