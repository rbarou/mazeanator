import React from 'react';

const SizeForm = () => {

    return(
        <>
        <h1>Chose labyrinth's size</h1>
        <div className='sizeForm'>
            <svg viewBox="0 0 1024 1024" class="icon" version="1.1" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="#000000"></path>
                </g>
            </svg>
            <input type="number" id="size" name="size" min="3" max="100" defaultValue="3"/>
            <svg viewBox="0 0 1024 1024" class="icon" version="1.1" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#000000"></path>
                </g>
            </svg>
        </div>
        </>
    );
}

export default SizeForm;