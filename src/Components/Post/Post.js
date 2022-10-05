import React from 'react';
import ('./Post.css')

const Post = ({post}) => {
    const {title, body} = post
    return (
        <div className='post'>
            <h2>{title}</h2>
            <p><small>{body}</small></p>
            <button>Show Details</button>
        </div>
    );
};

export default Post;