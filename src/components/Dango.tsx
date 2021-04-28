import React from 'react';
import temp from '../assets/powerful/temp.jpg';

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



export const Dango = (props: DangoProps):JSX.Element => {
    return(
        <div className='container-dango'>
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
        </div>
    )
}