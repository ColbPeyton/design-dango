import React,{useState, useContext} from 'react';
import {dangoInfo, dangoData ,powerful, determined, unusual, grandiose} from '../_data/data';
import {Dango} from './Dango';

interface SelectionState{
    currentDangos: dangoInfo[];
    currentCatagory: string;
}

enum catagories{
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

    const updateCurrentlyViewedDangos = (catagory:string):void => {
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


    return(
        <div className='container-dango-selection'>
            <div className='container-catagories'>
                <button 
                    className='catagories-btn' 
                    onClick={()=> updateCatagory('')}
                >All</button>
                <button 
                    className='catagories-btn' 
                    onClick={()=> updateCatagory(catagories.powerful)}
                >Powerful</button>
                <button 
                    className='catagories-btn' 
                    onClick={()=> updateCatagory(catagories.determined)}
                >Determined</button>
                <button 
                    className='catagories-btn' 
                    onClick={()=> updateCatagory(catagories.unusual)}
                >Unusual</button>
                <button 
                    className='catagories-btn' 
                    onClick={()=> updateCatagory(catagories.grandiose)}
                >Grandiose</button>
            </div>
        </div>
    )
}