import React, { Component } from 'react';

class SearchInput extends Component {
    render () {
        return (
            <div className="SearchInput">
                <input 
                placeholder="Enter ZIP" 
                value={this.props.searchZip}
                onChange={e => this.props.handleUpdate(e.target.value)}/>            
            </div>
        );
    }
}

export default SearchInput;