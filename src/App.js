import {robots} from'./robots';
import CardList from './CardList';
import Searchbox from './Searchbox';
import Scroll from './Scroll';

import React, { Component } from 'react';
class App extends Component{

    constructor(){
        super();
        this.state = {
            
            robots: []
        }

    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => this.setState({robots:json}));
    }

    render(){

        let onSearchChange = (e)=>{
            let name = e.target.value;
            let filteredRobot = [];
            for(let i=0; i<robots.length; i++){
                if(robots[i].name.toLowerCase().includes(name.toLowerCase())){
                    filteredRobot.push(robots[i]);
                }
            }
            console.log(filteredRobot);
            this.setState({robots: filteredRobot});
            
        }


        return(
            <div className="tc">
                <h1 className="f1 fw9 b">Robo Friends</h1>
                <Searchbox searchChange = { onSearchChange } />
                <Scroll>
                    <CardList robots={this.state.robots} />
                </Scroll>
            </div>
        );
        
    }
}

export default App;