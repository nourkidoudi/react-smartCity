import React, { useState } from 'react';
import './Museums.css';

function Museums() {
    const [activeFilter, setActiveFilter] = useState('all');

    const filters = [
        { id: 'all', name: 'Tous' },
        { id: 'art', name: 'Art & Culture' },
        { id: 'history', name: 'Histoire' },
        { id: 'archaeology', name: 'Archéologie' },
        { id: 'modern', name: 'Art Moderne' }
    ];

    const museums = [
        {
            id: 1,
            name: 'Musée National du Bardo',
            category: 'archaeology',
            rating: 4.9,
            price: '12 DT',
            image: 'https://images.unsplash.com/photo-1594388384603-60c321b534d0',
            description: 'Le plus grand musée de mosaïques romaines au monde',
            location: 'Bardo, Tunis',
            highlights: ['Mosaïques romaines', 'Statues antiques', 'Art islamique'],
            openHours: '9:00 - 17:00'
        },
        {
            id: 2,
            name: 'Musée de Carthage',
            category: 'history',
            rating: 4.7,
            price: '10 DT',
            image: 'https://images.unsplash.com/photo-1566159266789-6d6c4e769fb8',
            description: 'Histoire fascinante de l\'ancienne ville de Carthage',
            location: 'Carthage, Tunis',
            highlights: ['Ruines puniques', 'Artefacts romains', 'Vue sur mer'],
            openHours: '8:30 - 17:30'
        },
        {
            id: 3,
            name: 'Musée Dar Ben Abdallah',
            category: 'art',
            rating: 4.6,
            price: '8 DT',
            image: 'https://images.unsplash.com/photo-1594388384537-8394a26716ee',
            description: 'Arts et traditions populaires dans un palais traditionnel',
            location: 'Médina de Tunis',
            highlights: ['Architecture traditionnelle', 'Costumes', 'Artisanat'],
            openHours: '9:30 - 16:30'
        },
        {
            id: 4,
            name: 'Centre d\'Art Contemporain',
            category: 'modern',
            rating: 4.5,
            price: '15 DT',
            image: 'https://images.unsplash.com/photo-1594388384762-50e59c5b1c0b',
            description: 'Art contemporain tunisien et international',
            location: 'La Marsa, Tunis',
            highlights: ['Expositions temporaires', 'Artistes locaux', 'Ateliers'],
            openHours: '10:00 - 18:00'
        },
        {
            id: 5,
            name: 'Musée Archéologique de Sousse',
            category: 'archaeology',
            rating: 4.6,
            price: '9 DT',
            image: 'https://images.unsplash.com/photo-1594388384891-cdc02e29c7a8',
            description: 'Collection importante de mosaïques et d\'objets antiques',
            location: 'Sousse',
            highlights: ['Mosaïques', 'Poteries', 'Sculptures'],
            openHours: '9:00 - 17:00'
        }
    ];

    const filteredMuseums = activeFilter === 'all' 
        ? museums 
        : museums.filter(museum => museum.category === activeFilter);

    return (
        <main className="museums-container">
            <div className="museums-header">
                <h1>Explorez Nos Musées</h1>
                <p className="museums-intro">
                    Découvrez l'histoire riche et la culture fascinante de la Tunisie à travers nos musées exceptionnels
                </p>

                <div className="museums-filters">
                    {filters.map(filter => (
                        <button
                            key={filter.id}
                            className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter.id)}
                        >
                            {filter.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="museums-grid">
                {filteredMuseums.map(museum => (
                    <div key={museum.id} className="museum-card">
                        <div 
                            className="museum-image" 
                            style={{ backgroundImage: `url(${museum.image})` }}
                        >
                            <span className="museum-price">{museum.price}</span>
                        </div>
                        <div className="museum-content">
                            <h3>{museum.name}</h3>
                            <p className="museum-location">
                                <i className="fas fa-map-marker-alt"></i> {museum.location}
                            </p>
                            <div className="museum-rating">
                                <span className="rating-score">
                                    <i className="fas fa-star"></i> {museum.rating}
                                </span>
                                <span className="category-tag">{
                                    filters.find(f => f.id === museum.category)?.name
                                }</span>
                            </div>
                            <p className="museum-description">{museum.description}</p>
                            
                            <div className="museum-highlights">
                                <h4>Points d'intérêt :</h4>
                                <div className="highlights-list">
                                    {museum.highlights.map((highlight, index) => (
                                        <span key={index} className="highlight-tag">
                                            {highlight}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="museum-footer">
                                <span className="open-hours">
                                    <i className="far fa-clock"></i> {museum.openHours}
                                </span>
                                <button className="visit-btn">
                                    <i className="fas fa-ticket-alt"></i> Réserver
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Museums;
