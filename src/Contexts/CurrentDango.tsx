import React, {createContext, useState} from 'react';

export interface defaultDango {
    id : number, 
    name: string, 
    img: any,
    skill: string,
    activationChance: number,
    effect: string,
    dailySpecial: boolean,
}

interface defaultContext{
    currentDango: defaultDango[];
    addDango: (id:defaultDango)=> void;
    removeDango: (id:number)=> void;
    isLocatedInDango: (id:number)=> boolean;
    resetDango: () => void;
}


const defaultValue:defaultContext = {
    currentDango: [],
    addDango: (id:defaultDango)=> {},
    removeDango: (id:number)=> {},
    isLocatedInDango: (id:number) => false,
    resetDango: () => {}
 }

export const CurrentDangoContext = createContext(defaultValue);


interface CurrentDangoState{
    currentDango: defaultDango[];
}

export const CurrentDangoProvider = (props:any):JSX.Element => {
    const [currentDango, setCurrentDango] = useState<CurrentDangoState['currentDango']>(defaultValue.currentDango)

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

    const contextValue = {
        currentDango, 
        addDango,
        removeDango,
        isLocatedInDango,
        resetDango
    }

    return(
        <CurrentDangoContext.Provider value={contextValue}>
            {props.children}
        </CurrentDangoContext.Provider>
    )
}