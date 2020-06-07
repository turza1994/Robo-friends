import React, { Component } from 'react';

class Searchbox extends Component{
    render(){
        let onSearchChange = this.props.searchChange;
        return(
            <div>
                <input 
                className="input-reset ba b--black-20 pa2 mb2 w-30 tc"
                type = "search"
                placeholder="Search for robots"
                onChange={onSearchChange}
                />
            </div>
        );
    }
}

export default Searchbox;