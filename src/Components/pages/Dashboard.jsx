import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <h1>Dashboard</h1>
            <p>Welcome to the Dashboard! Here you can find all the important information.</p>

            <section className='statistics'>
                <h2>User Statistics</h2>
                <div className='stat'>Total Users: 150</div>
                <div className='stat'>Active Users: 120</div>
                <div className='stat'>New Signups Today: 5</div>
            </section>

            <section className='recent-activities'>
                <h2>Recent Activities</h2>
                <ul>
                    <li>User John Doe signed up.</li>
                    <li>User Jane Smith updated their profile.</li>
                    <li>User Alex Johnson logged in.</li>
                </ul>
            </section>

            <section className='quick-links'>
                <h2>Quick Links</h2>
                <ul>
                    <li><a href='/hotels'>View Hotels</a></li>
                    <li><a href='/restaurants'>View Restaurants</a></li>
                    <li><a href='/museums'>View Museums</a></li>
                </ul>
            </section>
            {/* Add more content related to the dashboard here */}
        </div>
    );
};

export default Dashboard;
