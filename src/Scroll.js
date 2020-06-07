import React from 'react';

const Scroll = (props)=>{
    return (
        <div className="mt2" style={{ overflowY: 'scroll', height: '800px', border: '1px solid black'}}>
            {props.children}
        </div>
    );
}

export default Scroll;