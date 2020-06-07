import Card from './Card';

import React from 'react';

const CardList = ({robots})=>{
    // const cardComp = ()=>{
    //     var arr = [];
    //     for(var i=0; i<10; i++){
    //         arr.push(<Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />);
    //     }
    //     return arr;
    // }
    let cardComp = robots.map((user, i) => {
            return (
                <Card
                    key={i}
                    id={robots[i].id}
                    name={robots[i].name}
                    email={robots[i].email}
                />
                );
            })
    return(
        <div className='CardList ph5'>
            { cardComp }
        </div>
    );
}

export default CardList;