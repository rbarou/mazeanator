import React from 'react';

import HeaderComponent from '../atoms/headerComponent';
import CustomButton from '../atoms/customButton';

const Solver = ({onSolveRequest}) => {
    return (
        <div className='solver'>
            <HeaderComponent headerTitle={"Solver"}/>
            <CustomButton handleClick={onSolveRequest} text={"Solve this labyrinth !"}/>
        </div>
    );
}

export default Solver;