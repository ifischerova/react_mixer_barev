import React from 'react';
import './color_slider.css';

const ColorSlider = ({ baseColor, colorName, onValueChange }) => {

    const handleValueChange = (e) => {
        onValueChange(e.target.value);
    }

    return (
        <>
            <label htmlFor="red">{colorName}</label>
			<input
                type="range"
                className={`slider slider--${baseColor}`}
                id="redSlider"
                min="0"
                max="255"
                value="0"
                onChange={handleValueChange}
             />
        </>
    );
};

export default ColorSlider;