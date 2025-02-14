import React, { useState } from 'react';
import './Hotels.css';

function Hotels() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedHotel, setSelectedHotel] = useState(null);

  const categories = [
    { id: 'spa', name: 'Spa', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874' },
    { id: 'pool', name: 'Piscine', image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf' },
    { id: 'seaview', name: 'Vue sur la mer', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4' },
    { id: 'allinclusive', name: 'Tout compris', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945' },
    { id: 'apartment', name: 'Appart\'hôtel', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af' }
  ];

  const hotels = [
    {
      id: 1,
      name: 'Grand Luxury Hotel',
      location: 'Hammamet, Tunisie',
      rating: 5,
      price: 299,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
      category: ['spa', 'pool'],
    },
    {
      id: 2,
      name: 'Seaside Resort',
      location: 'Sousse, Tunisie',
      rating: 4,
      price: 199,
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
      category: ['seaview', 'allinclusive'],
    },
    {
      id: 3,
      name: 'City Center Hotel',
      location: 'Tabarka, Tunisie',
      rating: 4,
      price: 159,
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa',
      category: ['apartment'],
    },
    {
      id: 4,
      name: 'Beach Resort & Spa',
      location: 'Midun, Tunisie',
      rating: 5,
      price: 279,
      image: 'https://images.unsplash.com/photo-1469796466635-455ede028aca',
      category: ['spa', 'seaview'],
    }
  ];

  const filteredHotels = activeTab === 'all' 
    ? hotels 
    : hotels.filter(hotel => hotel.category.includes(activeTab));

  return (
    <main className="hotels-page">
      <h1 className="hotels-title">Découvrez votre nouvel hébergement préféré</h1>
      
      <div className="hotels-header">
        <div className="category-grid">
          {categories.map(category => (
            <div 
              key={category.id}
              className="category-card"
              onClick={() => setActiveTab(category.id)}
            >
              <div className="category-image" style={{ backgroundImage: `url(${category.image})` }} />
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="special-offers">
        <div className="offers-header">
          <h2>Offres exceptionnelles pour une escapade de dernière minute</h2>
          <button className="view-all-btn">Voir toutes les offres</button>
        </div>
        <div className="hotels-grid">
          {filteredHotels.map(hotel => (
            <div key={hotel.id} className="hotel-card">
              <div className="hotel-image" style={{ backgroundImage: `url(${hotel.image})` }}>
                <div className="hotel-price">À partir de {hotel.price}€</div>
              </div>
              <div className="hotel-content">
                <h3>{hotel.name}</h3>
                <p className="hotel-location">{hotel.location}</p>
                <div className="hotel-rating">
                  {'★'.repeat(hotel.rating)}{'☆'.repeat(5-hotel.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Hotels;
