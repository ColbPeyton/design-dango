import React, {useContext} from 'react';
import {CurrentDangoContext, defaultDango, defaultContext} from '../Contexts/CurrentDango';
import { DangoEffect } from './DangoEffect';
import {stick} from '../_data/data';
import '../styles/DangoStick.scss';


export const DangoStick = ():JSX.Element => {
    const context = useContext<defaultContext>(CurrentDangoContext);

    const shouldRenderDango = (currentDango:defaultDango[], index: number):JSX.Element => {
        if(currentDango[index]){
            return <img className='dango' src={currentDango[index].img.default} alt={currentDango[index].name}/>
        }
        return <div></div>
    }

    const renderDangoEffect = (currentDango: defaultDango[], index: number):JSX.Element => {
        if(currentDango[index]){
            return <DangoEffect name={context.currentDango[index].skill} chance={context.currentDango[index].activationChance} />
        }
        return <DangoEffect />
    }

    const renderDango = ():JSX.Element => {
        return(
            <div className='container-dango-stick'>
                <div className='container-stick-section'>
                    <div className='stick'>
                        <img src={stick[0].default} alt='dango stick' />
                        {shouldRenderDango(context.currentDango, 0)}
                    </div>
                    <div className='effect'>
                        {renderDangoEffect(context.currentDango, 0)}
                    </div>
                </div>
                <div className='container-stick-section'>
                    <div className='stick'>
                        <img src={stick[1].default} alt='dango stick' />
                        {shouldRenderDango(context.currentDango, 1)}
                    </div>
                    <div className='effect'>
                        {renderDangoEffect(context.currentDango, 1)}
                    </div>                </div>
                <div className='container-stick-section'>
                    <div className='stick'>
                        <img src={stick[2].default} alt='dango stick' />
                        {shouldRenderDango(context.currentDango, 2)}
                    </div>
                    <div className='effect'>
                        {renderDangoEffect(context.currentDango, 2)}
                    </div>                
                </div>
                <div className='container-stick-section'>
                    <div className='stick'>
                        <img src={stick[3].default} alt='dango stick' />
                    </div>
                    <div className='effect'>
                        <div></div>
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