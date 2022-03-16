import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const UserRepos = () => {
    const {owner} = useParams()
    const [userRepos, setUserRepos] = useState([])


    useEffect(() => {
        axios(`https://api.github.com/users/${owner}/repos`)
            .then(({data}) => {
                setUserRepos(data)
            })
            .catch(e => console.log(e))
    }, [owner])


    return (
        <div>
            {userRepos.map(repos => (
                <div>
                    <Link to={`/info_repos/${owner}/${repos.name}`}>
                        {repos.name}
                    </Link>
                    <Link to='/'>
                        {repos.owner?.login}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default UserRepos;