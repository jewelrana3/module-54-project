import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';


const FriendDetails = () => {
    const friend = useLoaderData();
    const navigate = useNavigate();

    const handlerGoBack=()=>{
        navigate(-1)
    }
    return (
        <div>
            <h2>Firend details </h2>
            <h3>{friend.name}</h3>
            <p>Email:{friend.email}</p>
            <button onClick={handlerGoBack}>Go back</button>
        </div>
    );
};

export default FriendDetails;