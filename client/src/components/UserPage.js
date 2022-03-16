import React from 'react';
import {Link} from "react-router-dom";

const UserPage = ({user}) => {
    return (
        <>
            <h3>{user.login}</h3>
            <img src={user.avatar_url} alt={user.login}/>
            <h3>{user.name}</h3>
            <p>{user.company}</p>
            <p>{user.email}</p>
            <p>{user.location}</p>
            <div>{user.bio}</div>
            <div>{user.url}</div>
            <Link to={`/repo/${user.login}`}>
                repositories
            </Link>
        </>
    );
};

export default UserPage;