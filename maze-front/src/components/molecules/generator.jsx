import React, {useState} from 'react';

import HeaderComponent from '../atoms/headerComponent';
import SizeForm from '../atoms/sizeForm';
import CustomButton from '../atoms/customButton';
import Slider from 'react-slider';

const Generator = ({size,setSize,onSendRequest,setShowSteps}) => {  

    const [sliderValue, setSliderValue] = useState(0);

    const handleSliderChange = (value) => {
        setSliderValue(value);
    };

    return (
        <div className="generator">
            <HeaderComponent headerTitle={"Generator"}/>
            <SizeForm size={size} setSize={setSize} setShowSteps={setShowSteps}/>
            <div>
                <h1>Slider Value: {sliderValue}%</h1>
                <Slider
                    value={sliderValue}
                    onChange={handleSliderChange}
                    min={0}
                    max={100}
                />
                </div>
            <CustomButton handleClick={onSendRequest} text={"Generate !"}/>
        </div>
    );
}

export default Generator;