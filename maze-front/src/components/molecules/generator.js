import React from 'react';

import SizeForm from '../atoms/sizeForm';
import GenerateButton from '../atoms/generateButton';

const Generator = ({size,setSize,onSendRequest}) => {  
    return (
        <div className='generator'>
            <h1>Generator</h1>
            <SizeForm size={size} setSize={setSize}/>
            <GenerateButton onClickGenerate={onSendRequest}/>
        </div>
    );
}

export default Generator;