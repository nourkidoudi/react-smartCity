import React from "react";
import { Button } from "./Button";
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'> 
            <video 
                src="/videos/video-3.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: -1 }}
            />
            <h1>SMART CITY</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button 
                    className='btns' 
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
                <Button 
                    className='btns' 
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    WATCH TRAILER <i className='far fa-play-circle'/>
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;
