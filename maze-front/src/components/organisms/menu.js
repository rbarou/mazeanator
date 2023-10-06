import React from 'react';

import Generator from '../molecules/generator';
import Solver from '../molecules/solver';

import '../../App.css';

export default function Menu(){
    return(
        <div className='menu'>
            <h1>Menu</h1>
            <Generator/>
            <Solver/>
        </div>
    )
}