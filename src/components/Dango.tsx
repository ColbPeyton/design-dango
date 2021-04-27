import React from 'react';


interface DangoProps{
    dango: {
        id: number,
        name: string,
        img: string,
        activationPercent: number,
        effect: string,
        dailySpecial: boolean,
    }
}



export const Dango = (props: DangoProps):JSX.Element => {
    return(
        <div className='container-dango'>
            {props.dango.id}
            {props.dango.name}

        </div>
    )
}