import React from 'react';
import {Link} from "react-router-dom";

const UserCard = ({user}) => {
    return (
        <div>
            <Link className='text-decoration-none user-page-link' to={`/user_info/${user.login}`}>
                <img className='user-page-img' src={user.avatar_url} alt=""/>
                <div>{user.login}</div>
                <div>{user.type}</div>
            </Link>
        </div>
    );
};

export default UserCard;