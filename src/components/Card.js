import React from 'react';
import {Link} from "react-router-dom";

const Card = ({user}) => (
    <div className='card'>
        <img src={user.avatar_url} alt={user.login} className='card-img-top'/>
        <div className='card-body'>
            <h5 className='card-title'>{user.login}</h5>
            <Link className='btn text-white btn-dark btn-outline-info'
                  to={'/profile/'+user.login}>Open</Link>
        </div>
    </div>
);

export default Card;