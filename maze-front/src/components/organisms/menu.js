import React from 'react';

import Generator from '../molecules/generator';
import Solver from '../molecules/solver';

import '../../App.css';

export default function Menu({size,setSize,onSendRequest,setShowSteps}){
    return(
        <div className='menu'>
            <h1>Menu</h1>
            <Generator size={size} setSize={setSize} setShowSteps={setShowSteps} onSendRequest={onSendRequest}/>
            <Solver/>
        </div>
    )
}