import React,{useState, useContext} from 'react';
import {dangoInfo, dangoData ,powerful, determined, unusual, grandiose} from '../_data/data';
import {Dango} from './Dango';

interface SelectionState{
    currentDangos: dangoInfo[];
    currentCatagory: string;
}

enum catagories{
    all ='all',
    powerful = 'powerful', 
    determined = 'determined',
    unusual = 'unusual',
    grandiose = 'grandiose'
}


export const DangoSelection = ():JSX.Element => {

    const [currentDangos, setCurrentDangos] = useState<SelectionState['currentDangos']>(dangoData);
    const [currentCatagory, setCurrentCatagory] = useState<SelectionState['currentCatagory']>('all');


    // update catagory of dango to display
    const updateCatagory = (catagory:string):void => {
        setCurrentCatagory(catagory);
        updateCurrentlyViewedDangos(catagory)
    }

    // add active class to selected catagory button
    const activeCatagory = (catagoryName:string):string => {
        return catagoryName === currentCatagory
        ? 'active'
        : '';
    }

    const updateCurrentlyViewedDangos = (catagory: string):void => {
        switch(catagory){
            case catagories.powerful:
                setCurrentDangos(powerful);
                break;
            case catagories.determined:
                setCurrentDangos(determined);
                break;
            case catagories.unusual:
                setCurrentDangos(unusual);
                break;
            case catagories.grandiose:
                setCurrentDangos(grandiose);
                break;
            default:
                setCurrentDangos(dangoData);
        }
    }

    const renderCurrentDango = ():JSX.Element => {
        return(
            <div className='container-dango'>
                {currentDangos.map((dango, index) => {
                    return <Dango key={index} dango={
                        {
                            id: dango.id, 
                            name: dango.name, 
                            img: dango.img,
                            skill: dango.skill,
                            activationChance: dango.activationChance,
                            effect: dango.effect,
                            dailySpecial: dango.dailySpecial,
                        }
                    } />
                })}
            </div>
        )
    }



    return(
        <div className='container-dango-selection'>
            <div className='container-catagories'>
                <button 
                    className={`catagory-btn ${activeCatagory(catagories.all)}`} 
                    onClick={()=> updateCatagory(catagories.all)}
                >All</button>
                <button 
                    className={`catagory-btn ${activeCatagory(catagories.powerful)}`} 
                    onClick={()=> updateCatagory(catagories.powerful)}
                >Powerful</button>
                <button 
                    className={`catagory-btn ${activeCatagory(catagories.determined)}`} 
                    onClick={()=> updateCatagory(catagories.determined)}
                >Determined</button>
                <button 
                    className={`catagory-btn ${activeCatagory(catagories.unusual)}`} 
                    onClick={()=> updateCatagory(catagories.unusual)}
                >Unusual</button>
                <button 
                    className={`catagory-btn ${activeCatagory(catagories.grandiose)}`} 
                    onClick={()=> updateCatagory(catagories.grandiose)}
                >Grandiose</button>
            </div>
            {renderCurrentDango()}
        </div>
    )
}