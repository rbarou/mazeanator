import React from 'react';

import HeaderSettings from '../atoms/headerComponent';

import Generator from '../molecules/generator';
import Solver from '../molecules/solver';

import '../../App.css';

export default function Menu({size,setSize,onSendRequest,setShowSteps}){
    return(
        <div className='menu'>
            <HeaderSettings headerTitle={"Settings"}/>
            <Generator size={size} setSize={setSize} setShowSteps={setShowSteps} onSendRequest={onSendRequest}/>
            <Solver/>
        </div>
    )
}