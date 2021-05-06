import React, {useContext} from 'react';
import {CurrentDangoContext, defaultDango} from '../Contexts/CurrentDango';
import { DangoEffect } from './DangoEffect';
import {stick} from '../_data/data';
import '../styles/DangoStick.scss';

interface DangoStickProps{
    currentDango: defaultDango[];
    addDango: (id:defaultDango)=> void;
    removeDango: (id:number)=> void;
    isLocatedInDango: (id:number)=> boolean;
    resetDango: () => void;
}


export const DangoStick = ():JSX.Element => {
    const context = useContext<DangoStickProps>(CurrentDangoContext);

    const shouldRenderDango = (currentDango:defaultDango[], index: number):JSX.Element => {
        if(currentDango[index]){
            return <img className='dango' src={currentDango[index].img.default} alt={currentDango[index].name}/>
        }
        return <div></div>
    }

    const renderDango = ():JSX.Element => {
        return(
            <div className='container-dango-stick'>
                <div className='container-stick-section'>
                    <div className='stick'>
                        <img src={stick[0].default} alt='dango stick' />
                        {shouldRenderDango(context.currentDango, 0)}
                    </div>
                    <DangoEffect name={context.currentDango[0].skill} chance={context.currentDango[0].activationChance} />
                </div>
                <div className='container-stick-section'>
                    <div className='stick'>
                        <img src={stick[1].default} alt='dango stick' />
                        {shouldRenderDango(context.currentDango, 1)}
                    </div>
                    <DangoEffect name={context.currentDango[1].skill} chance={context.currentDango[1].activationChance} />
                </div>
                <div className='container-stick-section'>
                    <div className='stick'>
                        <img src={stick[2].default} alt='dango stick' />
                        {shouldRenderDango(context.currentDango, 2)}
                    </div>
                    <DangoEffect name={context.currentDango[2].skill} chance={context.currentDango[2].activationChance} />
                </div>
                <div className='container-stick-section'>
                    <div className='stick'>
                        <img src={stick[3].default} alt='dango stick' />
                    </div>
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