import React from 'react';

import Generator from '../molecules/generator';
import Solver from '../molecules/solver';

import '../../App.css';

export default function Menu({size,setSize}){
    return(
        <div className='menu'>
            <h1>Menu</h1>
            <Generator size={size} setSize={setSize}/>
            <Solver/>
        </div>
    )
}