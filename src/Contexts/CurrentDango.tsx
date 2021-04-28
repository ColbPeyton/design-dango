import React, {createContext, useState} from 'react';

interface defaultContext{
    currentDango: number[];
    addDango: (id:number)=> void;
    removeDango: (id:number)=> void;
}


const defaultValue:defaultContext = {
    currentDango: [0, 0, 0],
    addDango: (id:number)=> {},
    removeDango: (id:number)=> {}
 }

export const CurrentDangoContext = createContext(defaultValue);


interface CurrentDangoState{
    currentDango: number[];
}

export const CurrentDangoProvider = (props:any):JSX.Element => {
    const [currentDango, setCurrentDango] = useState<CurrentDangoState['currentDango']>(defaultValue.currentDango)

    const addDango = (id:number):void => {
        if(!currentDango.includes(id) && currentDango.length > 3){
            setCurrentDango([...currentDango, id])
        }
    }

    const removeDango = (id: number):void => {
        const temp = currentDango.filter((dango) => dango !== id);
        setCurrentDango(temp);
    }

    const contextValue = {
        currentDango, 
        addDango,
        removeDango
    }

    return(
        <CurrentDangoContext.Provider value={contextValue}>
            {props.children}
        </CurrentDangoContext.Provider>
    )
}