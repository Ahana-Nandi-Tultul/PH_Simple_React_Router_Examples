import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    const {username, phone} = friend; 
    return (
        <div>
            <h1>Show each person details.</h1>
            <h5>Name: {username}</h5>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default FriendDetails;