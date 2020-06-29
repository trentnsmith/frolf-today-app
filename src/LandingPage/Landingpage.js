import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
    render () {
        return (
            <div>
                <h1 className="data">
                    Frolf Today is made for all Nebraskans that enjoy playing disc golf.
                </h1>
                <h2>
                    This app allows you to search for disc golf courses in Nebraska.
                </h2>
                <div className="link_div">
                    <Link className="route" to='/search-page'>
                        Get Started
                    </Link>
                </div>
            </div>
        );
    };
};

export default LandingPage;