import React from 'react';

const SizeForm = ({size,setSize,setShowSteps,setComplexify}) => {

    const minSize = 3;

    const decrease = () => {
        const value = size-2 < minSize ? minSize : size-2;
        setSize(value)
    }

    const increase = () => {
        const value = size+2 < minSize ? minSize : size+2;
        setSize(value)
    }

    const handleChange = (event) => {
        if(event.target.value === '') return setSize(0);
        const value = parseInt(event.target.value) <= 0 ? 0 : parseInt(event.target.value); 
        setSize(value);
    }

    return(
        <div className='sizeFormContainer'>
            <h2 className='sizeFormHeader'>Chose labyrinth's size</h2>
            <div className='sizeForm'>
                <svg viewBox="0 0 1024 1024" version="1.1" fill="#000000" onClick={decrease}>
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="#000000"></path>
                    </g>
                </svg>
                <input type="text" id="size" name="size" onChange={handleChange} value={size} min={0}/>
                <svg viewBox="0 0 1024 1024" version="1.1" fill="#000000" onClick={increase}>
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#000000"></path>
                    </g>
                </svg>
            </div>
            <div className='showStepsInputContainer'>
                <label>
                    Show steps of the generation <br/>
                    (can cause some performances issues)
                </label>
                <input type="checkbox" id="showSteps" name="showSteps" value="showSteps" onClick={(event) => setShowSteps(event.target.checked)}/> 
            </div>
            <div className='showStepsInputContainer'>
                <label>
                    Make this labyrinth unperfect : 
                </label>
                <input type="checkbox" id="complexify" name="complexify" value="complexify" onClick={(event) => setComplexify(event.target.checked)}/> 
            </div>
        </div>
    );
}

export default SizeForm;