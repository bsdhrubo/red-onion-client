import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-bg">
            <div className="search-bar">
                <input type="text"/>
                <button>Search</button>
            </div>
        </div>
    );
};

export default Banner;