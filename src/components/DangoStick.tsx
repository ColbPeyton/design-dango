import React, {useContext, useState} from 'react';
import {CurrentDangoContext, defaultDango} from '../Contexts/CurrentDango';
import {Dango} from './Dango';

interface DangoStickState{
    currentStick: defaultDango[];
}


export const DangoStick = ():JSX.Element => {
    const context = useContext(CurrentDangoContext)

    const renderDango = ():JSX.Element => {
        return(
            <div className='container-dango-stick'>
                {context.currentDango.map((el, index) => {
                    return <Dango key={index} 
                        dango={
                            {
                                id: el.id, 
                                name: el.name, 
                                img: el.img,
                                skill: el.skill,
                                activationChance: el.activationChance,
                                effect: el.effect,
                                dailySpecial: el.dailySpecial,
                            }
                        } />
                    }
                )}
            </div>
        )
    }

    return(
        renderDango()
    )
}