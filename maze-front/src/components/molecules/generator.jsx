import React from 'react';

import HeaderComponent from '../atoms/headerComponent';
import SizeForm from '../atoms/sizeForm';
import CustomButton from '../atoms/customButton';

const Generator = ({size,setSize,onSendRequest,setShowSteps, setComplexify}) => {  
    return (
        <div className="generator">
            <HeaderComponent headerTitle={"Generator"}/>
            <SizeForm size={size} setSize={setSize} setShowSteps={setShowSteps} setComplexify={setComplexify}/>
            <CustomButton handleClick={onSendRequest} text={"Generate !"}/>
        </div>
    );
}

export default Generator;