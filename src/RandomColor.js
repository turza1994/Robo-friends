import React from 'react';

const RandomColor = ({onClickRandomColor})=>{
    return(
        <input type='button' value='Random color' onClick={onClickRandomColor} style={{background:"#3DB724", color:'white', height: '3vh', width: '19vh', margin: '2vh 0 0 3vh'}}  />
    );
}

export default RandomColor;