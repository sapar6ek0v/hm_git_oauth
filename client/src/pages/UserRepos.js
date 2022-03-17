import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {Wrapper} from "./styles/UserRepos.styled.js";
import Container from "../components/Container.js";
import Loader from "../components/Loader.js";

const UserRepos = () => {
    const {owner} = useParams()
    const [userRepos, setUserRepos] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        axios(`https://api.github.com/users/${owner}/repos`)
            .then(({data}) => {
                setUserRepos(data)
                setLoading(false)
            })
            .catch(e => console.log(e))
    }, [owner])

    if (loading) return <Loader />


    return (
        <Container>
            <Wrapper>
                <div className="row">
                    {userRepos.map((repos, idx) => (
                        <div key={idx} className='col-6'>
                            <div className='repos_card'>
                                <Link className='repos_link' to={`/info_repos/${owner}/${repos.name}`}>
                                    {repos.name}
                                </Link>
                                <Link className='repos_link' to='/'>
                                    {repos.owner?.login}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </Wrapper>
        </Container>
    );
};

export default UserRepos;