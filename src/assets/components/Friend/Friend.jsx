import React from 'react';
import './Friend.css';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {id, username, phone, email, company} = friend;
    return (
        <div className='friend'>
            <h2>{username}</h2>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <p>Company: {company.name}</p>
            <p><Link to={`/friend/${id}`}>Show me details</Link></p>
        </div>
    );
};

export default Friend;