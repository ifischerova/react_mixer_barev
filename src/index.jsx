import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import ColorSlider from './components/ColorSlider/ColorSlider';
import './style.css';

const App = () => {

  const[redValue, setRedValue] = useState();
  const[greenValue, setGreenValue] = useState();
  const[blueValue, setBlueValue] = useState();
  
  const handleValueChange = (value) => {
    value === "red" ? setRedValue(redValue) : value === "green" ? setGreenValue(greenValue) :setBlueValue(blueValue);
  }

  return (
    <div className="color-panel">
		<h1>Mixér barev</h1>
		<div className="sliders">
      <ColorSlider baseColor={"red"} colorName={"Červená"} onChange={handleValueChange}/>
      <ColorSlider baseColor={"green"} colorName={"Zelená"} onChange={handleValueChange}/>
      <ColorSlider baseColor={"blue"} colorName={"Modrá"} onChange={handleValueChange}/>
		</div>
		<div className="color-box" id="color-box" style={{ backgroundColor: `rgb(${redValue}, ${greenValue}, ${blueValue})`}}></div>
	</div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
