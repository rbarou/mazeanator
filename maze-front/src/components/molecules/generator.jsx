import React from 'react';

import HeaderComponent from '../atoms/headerComponent';
import SizeForm from '../atoms/sizeForm';
import CustomButton from '../atoms/customButton';

import PropTypes from 'prop-types';

const Generator = ({size, setRequestArguments, onSendRequest}) => {  
    return (
        <div className="generator">
            <HeaderComponent headerTitle={"Generator"}/>
            <SizeForm size={size} setRequestArguments={setRequestArguments}/>
            <CustomButton handleClick={onSendRequest} text={"Generate !"}/>
        </div>
    );
}

Generator.propTypes = {
    size: PropTypes.number.isRequired,
    setRequestArguments: PropTypes.func.isRequired,
    onSendRequest: PropTypes.func.isRequired
};

export default Generator;
