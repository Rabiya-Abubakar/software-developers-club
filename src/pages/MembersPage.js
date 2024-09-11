import React from 'react';
import { useLocation } from 'react-router-dom';

const MembersPage = () => {
    const location = useLocation();
    const userName = location.state?.userName;

    return (
        <div className="container page">
            <h1>Members Page</h1>
            {userName ? (
                <p>Welcome back, {userName}!</p> // Display personalized welcome message
            ) : (
                <p>Please log in to see member content.</p>
            )}
            {/* Add more content or features for members here */}
        </div>
    );
};

export default MembersPage;
