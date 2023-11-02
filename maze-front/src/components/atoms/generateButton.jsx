import React from 'react';

const GenerateButton = ({onClickGenerate}) => {

    return (
        <div className='buttonContainer'>
            <button className='generateButton' onClick={onClickGenerate}>Generate</button>
        </div>
    );

}

export default GenerateButton;