import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import ColorSlider from './components/ColorSlider/ColorSlider';
import './style.css';

const App = () => {

  const[redValue, setRedValue] = useState(0);
  const[greenValue, setGreenValue] = useState(0);
  const[blueValue, setBlueValue] = useState(0);
  
  const handleRedValueChange = (value) => {
    setRedValue(value);
  }

  const handleGreenValueChange = (value) => {
    setGreenValue(value);
  }

  const handleBlueValueChange = (value) => {
    setBlueValue(value);
  }

  return (
    <div className="color-panel">
		<h1>Mixér barev</h1>
		<div className="sliders">
      <ColorSlider baseColor={"red"} colorName={"Červená"} onValueChange={handleRedValueChange}/>
      <ColorSlider baseColor={"green"} colorName={"Zelená"} onValueChange={handleGreenValueChange}/>
      <ColorSlider baseColor={"blue"} colorName={"Modrá"} onValueChange={handleBlueValueChange}/>
		</div>
		<div className="color-box" id="color-box" style={{ backgroundColor: `rgb(${redValue}, ${greenValue}, ${blueValue})`}}></div>
	</div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
