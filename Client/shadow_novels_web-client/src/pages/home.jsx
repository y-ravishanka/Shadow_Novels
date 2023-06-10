import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        scrollToTop();
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            this is the home
        </div>
    );
};

export default Home;