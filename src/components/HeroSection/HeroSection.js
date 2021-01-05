import React from 'react';
import Button from 'components/Button/Button.js';
import 'components/HeroSection/HeroSection.css';
import 'App.css';

function HeroSection() {
    return (
        <div className = 'hero-container'>
            <video src = "videos/video-3.MOV" autoPlay loop muted/>
            <p> DISCOVER THE WONDERS OF NATURE</p>
            <div className = 'hero-btns'>
                <Button className ='btns' buttonStyle = 'btn--outline' 
                buttonSize = 'btn--large'>GET STARTED</Button>
                <Button className ='btns' buttonStyle = 'btn--primary' 
                buttonSize = 'btn--large'>WATCH TRAILER <i className= 'fas fa-play-circle'/></Button>

            </div>
        </div>
    )
}

export default HeroSection;
