import React from 'react';
import logo from "./image/Todo.png";
import image from "./image/Image.png";

import './about.css'; 
import { Link } from "react-router-dom";

const About = () => {
   

    return (
        <div>
            <div className="border">
                <div className="container">
                    <header>
                    <div className="logo"><img src={logo} alt=""/></div>
                        <div className="mean">
                        <Link to="/" className="home">Home</Link>
                         <Link to="/about">About</Link>
                        </div>
                    </header>
                </div>
            </div>
            <div className="container">
                <div className="title">
                    <h1>Welcome .</h1>
                    <p>This is my first challenge with HTML & CSS.</p>
                </div>
                <div className="img">
                    <img src={image} alt="" />
                </div>
                <div className="Aon">
                    <p>This app created by <span>Aon2023</span></p>
                </div>
            </div>
        </div>
    );
};

export default About;