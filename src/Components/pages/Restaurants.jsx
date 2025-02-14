import React, { useState } from 'react';
import './Restaurants.css';

function Restaurants() {
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'Tous' },
        { id: 'tunisian', name: 'Cuisine Tunisienne' },
        { id: 'mediterranean', name: 'Méditerranéen' },
        { id: 'seafood', name: 'Fruits de Mer' },
        { id: 'cafe', name: 'Café & Desserts' }
    ];

    const restaurants = [
        {
            id: 1,
            name: 'Le Petit Tunis',
            category: 'tunisian',
            rating: 4.8,
            priceLevel: '€€',
            image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950',
            description: 'Cuisine traditionnelle tunisienne dans un cadre authentique',
            location: 'Centre-ville, Tunis'
        },
        {
            id: 2,
            name: 'Marina Seafood',
            category: 'seafood',
            rating: 4.6,
            priceLevel: '€€€',
            image: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab',
            description: 'Les meilleurs fruits de mer avec vue sur le port',
            location: 'Port de La Goulette'
        },
        {
            id: 3,
            name: 'Café Sidi Bou',
            category: 'cafe',
            rating: 4.5,
            priceLevel: '€',
            image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24',
            description: 'Café pittoresque avec vue panoramique',
            location: 'Sidi Bou Said'
        },
        {
            id: 4,
            name: 'L\'Olivier',
            category: 'mediterranean',
            rating: 4.7,
            priceLevel: '€€€',
            image: 'https://images.unsplash.com/photo-1559304822-9eb2813c9844',
            description: 'Cuisine méditerranéenne raffinée',
            location: 'Gammarth'
        },
        {
            id: 5,
            name: 'Dar El Jeld',
            category: 'tunisian',
            rating: 4.9,
            priceLevel: '€€€',
            image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf',
            description: 'Restaurant gastronomique dans un palais historique',
            location: 'Médina de Tunis'
        }
    ];

    const filteredRestaurants = activeCategory === 'all' 
        ? restaurants 
        : restaurants.filter(restaurant => restaurant.category === activeCategory);

    return (
        <main className="restaurants-container">
            <div className="restaurants-header">
                <h1>Découvrez les Meilleurs Restaurants</h1>
                <p className="restaurants-intro">
                    Explorez la riche gastronomie tunisienne et internationale à travers notre sélection de restaurants exceptionnels
                </p>
                
                <div className="category-filters">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="restaurants-grid">
                {filteredRestaurants.map(restaurant => (
                    <div key={restaurant.id} className="restaurant-card">
                        <div 
                            className="restaurant-image" 
                            style={{ backgroundImage: `url(${restaurant.image})` }}
                        >
                            <span className="price-level">{restaurant.priceLevel}</span>
                        </div>
                        <div className="restaurant-content">
                            <h3>{restaurant.name}</h3>
                            <p className="restaurant-location">
                                <i className="fas fa-map-marker-alt"></i> {restaurant.location}
                            </p>
                            <div className="restaurant-rating">
                                <span className="rating-score">
                                    <i className="fas fa-star"></i> {restaurant.rating}
                                </span>
                                <span className="category-tag">{
                                    categories.find(cat => cat.id === restaurant.category)?.name
                                }</span>
                            </div>
                            <p className="restaurant-description">{restaurant.description}</p>
                            <button className="reserve-btn">
                                <i className="fas fa-utensils"></i> Réserver une table
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Restaurants;
