import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class CourseDetailPage extends Component {
    render () {
        let { name, rating, holes, description } = this.props
        return (
            <div>
                <div className="Detail">
                    <div className="Detail__title">{name}</div>
                    <span className="Detail__rating">{rating}</span>
                    <span className="Detail__holes">{holes}</span>
                    <div className="Detail__description">{description}</div>
                </div>
                <div className="goback">
                    <Link className="goback__link" to='/'>
                        Back to Results
                    </Link>
                    <Link className="goback__search" to='/'>
                        New Search
                    </Link>
                </div>
            </div>    
        );
    }
}

export default CourseDetailPage