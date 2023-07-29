import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData();
    console.log(posts);
    return (
        <div>
            <h4>All these posts are: {posts.length}</h4>
            <div>
                {
                    posts.map(post => <Post
                    key = {post.id}
                    post = {post}
                    ></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;