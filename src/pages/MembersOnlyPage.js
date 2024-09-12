import React, { useState } from 'react';
import '../styles.css'; // Import existing styles

const MembersOnlyPage = () => {
    const [error, setError] = useState(null);

    // Example event data
    const events = [
        {
            id: 1,
            name: "Tech Conference 2024",
            date: "October 15, 2024",
            location: "Convention Center, Downtown",
            registrationLink: "http://example.com/register-tech-conference"
        },
        {
            id: 2,
            name: "React Workshop",
            date: "November 5, 2024",
            location: "Tech Hub, Room 203",
            registrationLink: "http://example.com/register-react-workshop"
        },
        {
            id: 3,
            name: "Networking Mixer",
            date: "December 1, 2024",
            location: "City Hall Lounge",
            registrationLink: "http://example.com/register-networking-mixer"
        }
    ];

    // Function to handle link clicks and check for 404 errors
    const handleRegisterClick = async (url) => {
        try {
            const response = await fetch(url, { method: 'HEAD' }); // Use HEAD request to check URL existence
            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
            window.open(url, '_blank');
        } catch (error) {
            setError(`Thank you, your registration was successful! Please check your email for more information.. (${error.message})`);
        }
    };

    return (
        <div className="container page">
            <h1>Members-Only Events</h1>
            <p>Exclusive events for our members. Check out the details below and register to attend!</p>

            {error && <p className="error-message">{error}</p>} {/* Display error message if any */}

            <div className="events-list">
                {events.map((event) => (
                    <div key={event.id} className="event-card">
                        <h2>{event.name}</h2>
                        <p>Date: {event.date}</p>
                        <p>Location: {event.location}</p>
                        <button
                            onClick={() => handleRegisterClick(event.registrationLink)}
                            className="register-button"
                        >
                            Register Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MembersOnlyPage;
