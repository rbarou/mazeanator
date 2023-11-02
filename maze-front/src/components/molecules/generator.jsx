import React from 'react';

import HeaderComponent from '../atoms/headerComponent';
import SizeForm from '../atoms/sizeForm';
import GenerateButton from '../atoms/generateButton';

const Generator = ({size,setSize,onSendRequest,setShowSteps}) => {  
    return (
        <div className="generator">
            <HeaderComponent headerTitle={"Generator"}/>
            <SizeForm size={size} setSize={setSize} setShowSteps={setShowSteps}/>
            <GenerateButton onClickGenerate={onSendRequest}/>
        </div>
    );
}

export default Generator;