import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Friend = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <h4>My all frined</h4>
        </div>
    );
};

export default Friend;