import React,{useContext} from 'react';
import {defaultContext, CurrentDangoContext} from '../Contexts/CurrentDango';


export const EffectAlert = ():JSX.Element => {
    const context = useContext<defaultContext>(CurrentDangoContext);

    const renderList = ():JSX.Element => {
        if(context.dangoHasBeenMade){
            if(context.activeEffect.length >= 1){
                return <div className='list'>
                    {context.activeEffect.map((effect:string, index:number):JSX.Element => {
                        return(
                            <div className='container-effect'>
                                <h3 key={index}>{effect}</h3>
                            </div>
                            )
                        })
                    }
                </div>

            }
            return(
                <div className='container-effect'>
                    <h3>Nothing this time...</h3>
                </div>
            )
        }
        return <div></div>
    }

    const effectDisplay = ():JSX.Element => {
        return(
            <div className='container-effect-alert'>

            </div>
        )
    }

    const shouldRender = ():JSX.Element => {
        return context.dangoHasBeenMade 
        ? effectDisplay()
        : <div></div>
    }


    return (
        shouldRender()
    )
}