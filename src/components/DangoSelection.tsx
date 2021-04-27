import React,{useState, useContext} from 'react';
import {dangoInfo, dangoData ,powerful, determined, unusual, grandiose} from '../_data/data';

interface SelectionState{
    currentDangos: dangoInfo[];
}


export const DangoSelection = ():JSX.Element => {

    const [currentDangos, setCurrentDangos] = useState<SelectionState['currentDangos']>(dangoData);

    return(
        <div className='container-dango-selection'>

        </div>
    )
}