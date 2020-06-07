import React from 'react';


const Card = ({id, name, email})=>{
    
        return(
            <div className="bg-near-white dib br3 pa3 ma3 grow bw-4 shadow-5 tc">
                <img src={`https://robohash.org/${id}?size=200x200`} alt='robo friend'></img>
                <h3>Name: {name} </h3>
                <p>email: {email} </p>
            </div>
        );
    
}

export default Card;