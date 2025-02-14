import React from 'react';
import './Transport.css';

const Transport = () => {
    const transports = [
        {
            title: 'City Bus',
            image: 'public/images/car.jpg',
            description: 'Reliable public transport for navigating the city.'
        },
        {
            title: 'Taxi Service',
            image: 'public/images/taxi.jpg',
            description: 'Convenient taxi service for quick rides.'
        },
        {
            title: 'Bicycle Rentals',
            image: 'public/images/byc.jpg',
            description: 'Explore the city at your own pace with bike rentals.'
        }
    ];

    return (
        <div className="transport-page">
            <h1>Transport Page</h1>
            <p>Welcome to the Transport page!</p>
            <div className='transports-container'>
                {transports.map((transport, index) => (
                    <div className='transport-card' key={index}>
                        <img src={transport.image} alt={transport.title} className='transport-card-image' />
                        <h2 className='transport-card-title'>{transport.title}</h2>
                        <p className='transport-card-description'>{transport.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Transport;