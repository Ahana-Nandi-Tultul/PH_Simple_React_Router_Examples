import React from 'react';
import './Post.css';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title} = post;
    const navigate = useNavigate();

    const handlePostDetails = () =>{
        navigate(`/post/${id}`);
    }
    return (
        <div className='post'>
            <h4>{id}</h4>
            <h5>{title}</h5>
            <Link to={`/post/${id}`}>Show me Details</Link>
            <Link to={`/post/${id}`}><button>Show me Details</button></Link>
            <button onClick={handlePostDetails}>Use Navigate</button>
            
        </div>
    );
};

export default Post;