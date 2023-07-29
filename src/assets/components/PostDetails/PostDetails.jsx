import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const postDetails = useLoaderData();
    const {id, title, body} = postDetails;

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <h4>{id}</h4>
            <h4>{title}</h4>
            <p><small>{body}</small></p>
            <button onClick={goBack}>Go back</button>
        </div>
    );
};

export default PostDetails;