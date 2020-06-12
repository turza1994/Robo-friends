import {robots} from'./robots';
import CardList from './CardList';
import Searchbox from './Searchbox';
import ColorPicker from './ColorPicker';
import RandomColor from './RandomColor';
import Scroll from './Scroll';
import './App.css';

import React, { Component } from 'react';
class App extends Component{

    constructor(){
        super();
        this.state = {
            robots: [],
            color1: '#ff3300',
            color2: '#ffac4d'
        }

        this.onSearchChange = this.onSearchChange.bind(this);
        this.onColorChange1 = this.onColorChange1.bind(this);
        this.onColorChange2 = this.onColorChange2.bind(this);
        this.onClickRandomColor = this.onClickRandomColor.bind(this);
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => this.setState({robots:json}));
    }

    onSearchChange(e){
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

    onColorChange1(e){
        console.log(e.target.value);
        this.setState({color1: e.target.value});
    }
    onColorChange2(e){
        console.log(e.target.value);
        this.setState({color2: e.target.value});
    }

    onClickRandomColor(e){
        let r1 = Math.floor(Math.random()*255);
        let g1 = Math.floor(Math.random()*255);
        let b1 = Math.floor(Math.random()*255);
        let r2 = Math.floor(Math.random()*255);
        let g2 = Math.floor(Math.random()*255);
        let b2 = Math.floor(Math.random()*255);
        // console.log(randomNumber);
        this.setState({
            color1: `rgb(${r1}, ${g1}, ${b1})`,
            color2: `rgb(${r2}, ${g2}, ${b2})`
        });
    }

    render(){

        return(
            <div className="App tc" style={{background: `linear-gradient(to left, ${this.state.color1} , ${this.state.color2})`}} >
                <header>
                    <h1 className="f1 fw9 b">Robo Friends</h1>
                    <Searchbox searchChange = { this.onSearchChange } />
                    <h3>Change Background Color ?</h3>
                    <ColorPicker onColorChange = {this.onColorChange1} color = {this.state.color1} />
                    <ColorPicker onColorChange = {this.onColorChange2} color = {this.state.color2} />
                    <RandomColor onClickRandomColor = {this.onClickRandomColor} />
                </header>
                <Scroll>
                    <CardList robots={this.state.robots} />
                </Scroll>
            </div>
        );
        
    }
}

export default App;