import React from 'react';
import './Friend.css'
import { Link, useNavigate } from 'react-router-dom';

const Friend = ({friend}) => {
    const navigate = useNavigate();
    const {name,email,id ,phone} = friend;

    const handlerButton=()=>{
        navigate(`/friend/${id}`)
    }
    return (
        <div className='friend'>
            <h4>{name}</h4>
            <p>Email:{email}</p>
            <p>{phone}</p>
            <p><Link to={`/friend/${id}`}>Show Me</Link></p>
            <button><Link to={`/friend/${id}`}>Show Derails</Link></button>
            <button onClick={handlerButton}>Handler Button</button>
        </div>
    );
};

export default Friend;
