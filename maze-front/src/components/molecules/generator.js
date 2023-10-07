import React from 'react';

import SizeForm from '../atoms/sizeForm';

const Generator = ({size,setSize}) => {  
    return (
        <div className='generator'>
            <h1>Generator</h1>
            <SizeForm size={size} setSize={setSize}/>
        </div>
    );
}

export default Generator;