import React from 'react';
import Banner from '../HomePageComponents/Banner/Banner';
import ItemsTab from '../HomePageComponents/ItemsTab/ItemsTab';
import Navbar from '../HomePageComponents/Navbar/Navbar';

const LandingPageLayOut = () => {
    return (
        <div>
            <div className="container">
                <Navbar/>
            </div>
            <Banner/>
            <div className="container">
                <ItemsTab/>
            </div>
        </div>
    );
};

export default LandingPageLayOut;