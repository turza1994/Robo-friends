import React from 'react';

const ColorPicker = ({onColorChange, color})=>{
    return(
        <input type='color' onChange={onColorChange} value={color} />
    );
}

export default ColorPicker;