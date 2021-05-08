import React,{useContext} from 'react';
import {defaultContext, CurrentDangoContext} from '../Contexts/CurrentDango';
import {randomKey} from '../_helpers/randomKey';
import '../styles/EffectAlert.scss';

export const EffectAlert = ():JSX.Element => {
    const context = useContext<defaultContext>(CurrentDangoContext);

    const renderList = ():JSX.Element => {
        if(context.dangoHasBeenMade){
            if(context.activeEffect.length >= 1){
                return <div className='list'>
                    {context.activeEffect.map((effect:string):JSX.Element => {
                        return(
                            <div className='container-effect' key={randomKey()}>
                                <h3>{effect}</h3>
                            </div>
                            )
                        })
                    }
                </div>

            }
            return(
                <div className='list'>
                    <div className='container-effect'>
                        <h3>Nothing this time...</h3>
                    </div>
                </div>
                
            )
        }
        return <div></div>
    }

    const effectDisplay = ():JSX.Element => {
        return(
            <div className='container-effect-alert'>
                <div className='container-title'>
                    <h2>Dango Skills activated!</h2>
                </div>
                {renderList()}
                <div className='container-btn'>
                    <button className='btn' onClick={()=> context.resetDangoContext()}>
                        Try Again? 
                    </button>
                </div>
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