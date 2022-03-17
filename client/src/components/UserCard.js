import React from 'react';
import {Link} from "react-router-dom";
import {Wrapper} from "./styles/UserCard.styled.js";
import notFound from '../images/notFound.png'

const UserCard = ({user}) => {
    return (
        <Wrapper>
            <Link to={`/user_info/${user.login}`} className='card'>
                <img className='user-page-img' src={user.avatar_url || notFound} alt=""/>
                <div className='card_titles'>
                    <h4>{user.login}</h4>
                    <h4>{user.type}</h4>
                </div>
            </Link>
        </Wrapper>
    );
};

export default UserCard;