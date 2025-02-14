import React from 'react';
import './Tours.css';

const Tours = () => {
    const tours = [
        {
            title: 'Beach Paradise',
            image: 'public/images/tours1.jpg',
            description: 'Enjoy the sun and sand at our beautiful beach resorts.',
            price: '$199',
            reservations: 'Book now for a special discount!'
        },
        {
            title: 'Desert Quad Adventure',
            image: 'public/images/tours2.jpg',
            description: 'Experience thrilling hikes and breathtaking views.',
            price: '$299',
            reservations: 'Limited spots available!'
        },
        {
            title: 'City Exploration',
            image: 'public/images/tours3.jpg',
            description: 'Discover the vibrant culture and attractions of the city.',
            price: '$149',
            reservations: 'Reserve your spot today!'
        },
        {
            title: 'Mountain Trekking',
            image: 'public/images/tours4.jpg',
            description: 'Experience the beauty of nature on our guided treks.',
            price: '$249',
            reservations: 'Early bird discount until next month!'
        }
    ];

    return (
        <div className="tours-page">
            <h1>Tours Page</h1>
            <p>Welcome to the Tours page!</p>
            <div className='tours-container'>
                {tours.map((tour, index) => (
                    <div className='tour-card' key={index}>
                        <img src={tour.image} alt={tour.title} className='tour-card-image' />
                        <h2 className='tour-card-title'>{tour.title}</h2>
                        <p className='tour-card-description'>{tour.description}</p>
                        <p className='tour-card-price'>Price: {tour.price}</p>
                        <p className='tour-card-reservations'>{tour.reservations}</p>
                        <button className='reserve-button'>Reserve Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tours;