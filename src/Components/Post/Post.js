import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import ('./Post.css')

const Post = ({post}) => {
    const {id,title, body} = post;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div className='post'>
            <h2>{title}</h2>
            <p><small>{body}</small></p>
            <NavLink to={`/post/${id}`} >Visit: {id}</NavLink>
            <NavLink to={`/post/${id}`}><button>Details NavLink</button></NavLink>
            <button onClick={handleNavigate}>Details Handler</button>
        </div>
    );
};

export default Post;