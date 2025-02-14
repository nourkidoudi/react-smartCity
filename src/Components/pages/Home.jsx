import React from 'react';
import '../../App.css'
import HeroSection from '../HeroSection'
import Cards from '../Cards';

function Home() {
    return (
        <main className="home">
            <HeroSection />
            <Cards />
        </main>
    );
}

export default Home;