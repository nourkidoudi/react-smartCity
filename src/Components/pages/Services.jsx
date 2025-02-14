import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

function Services() {
  const services = [
    {
      id: 1,
      title: 'Hotels',
      description: 'Discover luxurious hotels and comfortable accommodations for every budget',
      icon: '🏨',
      features: ['5-star hotels', 'Boutique hotels', 'Budget-friendly options', 'Resort packages'],
      link: '/hotels'
    },
    {
      id: 2,
      title: 'Restaurants',
      description: 'Experience local and international cuisine at the finest restaurants',
      icon: '🍽️',
      features: ['Local cuisine', 'Fine dining', 'Street food tours', 'Culinary experiences']
    },
    {
      id: 3,
      title: 'Museums',
      description: 'Explore rich cultural heritage and historical artifacts',
      icon: '🏛️',
      features: ['Art galleries', 'Historical museums', 'Cultural centers', 'Guided tours']
    },
    {
      id: 4,
      title: 'Tours & Activities',
      description: 'Join exciting tours and activities led by expert guides',
      icon: '🎯',
      features: ['City tours', 'Adventure activities', 'Cultural experiences', 'Day trips']
    },
    {
      id: 5,
      title: 'Transport',
      description: 'Reliable transportation services for all your travel needs',
      icon: '🚗',
      features: ['Airport transfers', 'Car rentals', 'Public transport', 'Private drivers']
    },
    {
      id: 6,
      title: 'Medical Services',
      description: 'Access to quality healthcare and medical assistance',
      icon: '⚕️',
      features: ['24/7 medical support', 'Hospital network', 'Emergency services', 'Travel insurance']
    }
  ];

  return (
    <div className='services-container'>
      <h1>Our Services</h1>
      <p className='services-intro'>Discover everything you need for an unforgettable experience</p>
      <div className='services-grid'>
        {services.map((service) => (
          <div key={service.id} className='service-card'>
            <div className='service-icon'>{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <ul className='service-features'>
              {service.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            {service.link && (
              <Link to={service.link}>
                <button className='service-button'>Explore {service.title}</button>
              </Link>
            )}
            {!service.link && (
              <button className='service-button'>Explore {service.title}</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
