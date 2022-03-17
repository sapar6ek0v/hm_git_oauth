import React from 'react';
import {Link} from "react-router-dom";
import {Wrapper} from "./styles/UserPage.styled.js";
import Container from "./Container.js";
import {GoLocation} from 'react-icons/go'
import {AiFillFileText} from 'react-icons/ai'
import notFound from '../images/notFound.png'

const UserPage = ({user}) => {
    return (
        <Container>
            <Wrapper>
                <div className='col-4'>
                    <img src={user.avatar_url || notFound} alt={user.login}/>
                </div>
                <div className='col-8'>
                    <div className='row'>
                        <div className='user_about'>
                            <p>User: <span>{user.login}</span></p>
                            <p>Name: <span>{user.name}</span></p>
                            <p>Company: <span>{user.company || 'not found'}</span></p>
                            <p>Email: <span>{user.email || 'not found'}</span></p>
                            <p>
                                <GoLocation/>
                                <span>{user.location || 'not found'}</span>
                            </p>
                            <p>
                                <AiFillFileText />
                                <span>
                                    {user.bio || 'not found'}
                                </span>
                            </p>
                        </div>
                        <div className='user_links'>
                            <a className='user_link' href={user.html_url} target='_blank' rel="noreferrer">github</a>
                            {
                                !user ?
                                    null
                                    : <Link className='user_link' to={`/repo/${user.login}`}>
                                        repositories
                                      </Link>
                            }
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Container>
    );
};

export default UserPage;