import React, {createContext, useState} from 'react';

interface defaultContext{
    currentDango: number[];
    addDango: (id:number)=> void;
    removeDango: (id:number)=> void;
    isLocatedInDango: (id:number)=> boolean;
}


const defaultValue:defaultContext = {
    currentDango: [],
    addDango: (id:number)=> {},
    removeDango: (id:number)=> {},
    isLocatedInDango: (id:number) => false
 }

export const CurrentDangoContext = createContext(defaultValue);


interface CurrentDangoState{
    currentDango: number[];
}

export const CurrentDangoProvider = (props:any):JSX.Element => {
    const [currentDango, setCurrentDango] = useState<CurrentDangoState['currentDango']>(defaultValue.currentDango)

    const addDango = (id:number):void => {
        if(!isLocatedInDango(id) && currentDango.length < 3){
            setCurrentDango([...currentDango, id])
        }
    }

    const removeDango = (id: number):void => {
        const temp = currentDango.filter((dango) => dango !== id);
        setCurrentDango(temp);
    }

    const isLocatedInDango =(id:number): boolean => {
        return currentDango.includes(id);
    }

    const contextValue = {
        currentDango, 
        addDango,
        removeDango,
        isLocatedInDango
    }

    return(
        <CurrentDangoContext.Provider value={contextValue}>
            {props.children}
        </CurrentDangoContext.Provider>
    )
}