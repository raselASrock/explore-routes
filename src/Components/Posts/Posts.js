import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Posts = () => {
    const posts = useLoaderData();
    console.log(posts);
    return (
        <div>
            <h3>A lot of Facebook Post Here.</h3>
            {
                // posts.map( post => <Posts></Posts>)
            }
        </div>
    );
};

export default Posts;