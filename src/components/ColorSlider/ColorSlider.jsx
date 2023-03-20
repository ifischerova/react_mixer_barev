import React, { useState } from 'react';
import './color_slider.css';

const ColorSlider = ({ baseColor, colorName, onValueChange }) => {

    const handleValueChange = (e) => {
        onValueChange(e.target.value);
        setValue(e.target.value)
    }

    const [value, setValue] = useState(0)

    return (
        <>
            <label htmlFor={`${baseColor}`}>{colorName}</label>
			<input
                type="range"
                className={`slider slider--${baseColor}`}
                id={`${baseColor}Slider`}
                min="0"
                max="255"
                value={value}
                onChange={handleValueChange}
             />
        </>
    );
};

export default ColorSlider;