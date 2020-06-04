import React, { Component } from 'react';
import './FilterOptions.css'

class FilterOptions extends Component {
    render() {
        const { filterOption } = this.props;
        return (
            <div className="FilterOptions">
                <span className="FilterOptions__option">
                    <label htmlFor="filter_all">
                        <input type="checkbox" value="All" id="filter_all" name="filter" checked={true}/>
                    All
                    </label>
                </span>
                <span classname="FilterOptions__option">
                    <label htmlFor="filter_9holes">
                        <input type="checkbox" value="9Holes" id="filter_9holes" name="filter" checked={filterOption ==="9Holes"}/>
                    9 Holes    
                    </label>
                </span>
                <span classname="FilterOptions__option">
                    <label htmlFor="filter_18holes">
                        <input type="checkbox" value="18Holes" id="filter_18holes" name="filter" checked={filterOption ==="18Holes"}/>
                    18 Holes    
                    </label>
                </span>
            </div>
        );
    }
}

export default FilterOptions;