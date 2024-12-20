import React from 'react';
import './Home.css';
import Navbar from './Navbar';

const Home = () => {
    return (
        <>
        <Navbar/>
        <div className="home-container">
            <div className="home-content">
                <h1><b>WELCOME TO MOVIE STORE</b></h1>
                <div>
                <h5>Movie store is a subscription-based streaming service that allows our members to watch movies on an internet-connected device. a streaming service that offers a wide variety of award-winning movies, anime, documentaries, and more on thousands of internet-connected devices</h5>
                </div>
            </div>
            <div className="home-banner">
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZIBmrP3Mb_g6wV9lQvBt-Kd56w92-qLUm0g&s" 
                    alt="Welcome Banner" 
                    className="banner-image"/>
            </div>
        </div>
        </>
    );
};

export default Home;
