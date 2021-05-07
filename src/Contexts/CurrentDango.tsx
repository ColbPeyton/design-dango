import React, {createContext, useState} from 'react';
import { chance } from '../_helpers/chance';

export interface defaultDango {
    id : number, 
    name: string, 
    img: any,
    skill: string,
    activationChance: number,
    effect: string,
    dailySpecial: boolean,
}

export interface defaultContext{
    currentDango: defaultDango[];
    addDango: (id:defaultDango)=> void;
    removeDango: (id:number)=> void;
    isLocatedInDango: (id:number)=> boolean;
    resetDango: () => void;
    resetActiveEffect: () => void;
    activateEffects: () => void;
    activeEffect: string[];
}


const defaultValue:defaultContext = {
    currentDango: [],
    addDango: (id:defaultDango)=> {},
    removeDango: (id:number)=> {},
    isLocatedInDango: (id:number) => false,
    resetDango: () => {},
    resetActiveEffect: () => {},
    activateEffects: () => {},
    activeEffect: []
 }

export const CurrentDangoContext = createContext(defaultValue);


interface CurrentDangoState{
    currentDango: defaultDango[];
    activeEffect: string[];
}

export const CurrentDangoProvider = (props:any):JSX.Element => {
    const [currentDango, setCurrentDango] = useState<CurrentDangoState['currentDango']>(defaultValue.currentDango)
    const [activeEffect, setActiveEffect] = useState<CurrentDangoState['activeEffect']>(defaultValue.activeEffect)

    const addDango = (dango: defaultDango):void => {
        if(!isLocatedInDango(dango.id) && currentDango.length < 3){
            setCurrentDango([...currentDango, dango])
        }
    }

    const removeDango = (id: number):void => {
        const temp = currentDango.filter((curr) => curr.id !== id);
        setCurrentDango(temp);
    }

    const isLocatedInDango =(id: number): boolean => {
        return currentDango.some(curr => curr.id === id);
    }

    const resetDango = ():void => {
        setCurrentDango([]);
    }
    const resetActiveEffect = ():void => {
        setActiveEffect([]);
    }

    const activateEffects = ():void => {
        if(currentDango.length === 3){
            for(const activate of currentDango){
                if(chance(activate.activationChance)){
                    setActiveEffect([...activeEffect, activate.skill])
                }
            }
        }
    }


    const contextValue = {
        currentDango, 
        addDango,
        removeDango,
        isLocatedInDango,
        resetDango,
        resetActiveEffect, 
        activateEffects, 
        activeEffect
    }

    return(
        <CurrentDangoContext.Provider value={contextValue}>
            {props.children}
        </CurrentDangoContext.Provider>
    )
}