import React from 'react';

const CustomButton = ({handleClick, text}) => {

    return (
        <div className='customButtonContainer'>
            <button className='customButton' onClick={handleClick}>{text}</button>
        </div>
    );

}

export default CustomButton;