import React, {useEffect, useState} from 'react';
import axios from "axios";
import UserPage from "../components/UserPage.js";

const GITHUB_CLIENT_ID = process.env.REACT_GITHUB_CLIENT_ID
const gitHubRedirectURL = "http://localhost:8000/api/github"
const path = '/'

const Main = () => {
    const [user, setUser] = useState({})

    useEffect(() => {
        (async function () {
            const userData = await axios
                .get(`http://localhost:8000/api/about-user`, {
                    withCredentials: true,
                })
                .then(({data}) => data);

            setUser(userData);
        })();
    }, [])


    return (
        <div>
            {!user
                ? (<a href={`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${gitHubRedirectURL}?path=${path}&scope=user:email`}>
                    Sign In With Github
                  </a>)
                : <UserPage user={user} />
            }
        </div>
    );
};

export default Main;