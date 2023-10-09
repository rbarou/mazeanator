import React from 'react';

const GenerateButton = ({onClickGenerate}) => {

    return (
        <div className='generateButton'>
            <button onClick={onClickGenerate}>Generate</button>
        </div>
    );

}

export default GenerateButton;