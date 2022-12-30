import React from 'react';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import Service from '../Service/Service';
import Upcoming from '../Upcoming/Upcoming';

const HomePage = () => {
    return (
        <div>
            <Home></Home>
            <Upcoming></Upcoming>
            <Service></Service>
            <Contact></Contact>
        </div>
    );
};

export default HomePage;