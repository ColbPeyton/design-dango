import React, {useContext} from 'react';
import {CurrentDangoContext, defaultDango} from '../Contexts/CurrentDango';
import {stick} from '../_data/data';

interface DangoStickProps{
    currentDango: defaultDango[];
    addDango: (id:defaultDango)=> void;
    removeDango: (id:number)=> void;
    isLocatedInDango: (id:number)=> boolean;
}


export const DangoStick = ():JSX.Element => {
    const context = useContext<DangoStickProps>(CurrentDangoContext);

    const shouldRenderDango = (currentDango:defaultDango[], index: number):JSX.Element => {
        return currentDango[index]
        ? <img src={currentDango[index].img.default} alt={currentDango[index].name}/>
        : <div></div>
    }

    const renderDango = ():JSX.Element => {
        return(
            <div className='container-dango-stick'>
                <div className='top'>
                    <img src={stick[0].default} alt='dango stick' />
                    {shouldRenderDango(context.currentDango, 0)}
                </div>
                <div className='mid'>
                    <img src={stick[1].default} alt='dango stick' />
                    {shouldRenderDango(context.currentDango, 1)}
                </div>
                <div className='bot'>
                    <img src={stick[2].default} alt='dango stick' />
                    {shouldRenderDango(context.currentDango, 2)}
                </div>
                <div className='stick'>
                    <img src={stick[3].default} alt='dango stick' />
                </div>
                
            </div>
        )
    }

    return(
        renderDango()
    )
}



// {context.currentDango.map((el, index) => {
//     return <div key={index}>
//             <img src={el.img.default} alt={el.name}/>
//         </div>
//     }
// )}