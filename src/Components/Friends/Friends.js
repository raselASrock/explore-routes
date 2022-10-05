import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Friends = () => {
    const friends = useLoaderData()
    return (
        <div>
            <h2>I have so many friends.{friends.length}</h2>
        </div>
    );
};

export default Friends;