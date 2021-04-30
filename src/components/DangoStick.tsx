import React, {useContext} from 'react';
import {CurrentDangoContext, defaultDango} from '../Contexts/CurrentDango';

interface DangoStickProps{
    currentDango: defaultDango[];
    addDango: (id:defaultDango)=> void;
    removeDango: (id:number)=> void;
    isLocatedInDango: (id:number)=> boolean;
}


export const DangoStick = ():JSX.Element => {
    const context = useContext<DangoStickProps>(CurrentDangoContext);

    const renderDango = ():JSX.Element => {
        return(
            <div className='container-dango-stick'>
                {context.currentDango.map((el, index) => {
                    return <div key={index}>
                            <img src={el.img.default} alt={el.name}/>
                        </div>
                    }
                )}
            </div>
        )
    }

    return(
        renderDango()
    )
}