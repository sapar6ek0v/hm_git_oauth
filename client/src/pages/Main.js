import React, {useEffect, useState} from 'react';
import axios from "axios";
import UserPage from "../components/UserPage.js";
import Cookies from 'js-cookie'
import {StyledMain} from "./styles/Main.styled.js";


const GITHUB_CLIENT_ID = "8d63da21532797856434"
const gitHubRedirectURL = "http://localhost:8000/api/github"
const path = '/'

const Main = () => {
    const [user, setUser] = useState({})
    const [auth, setAuth] = useState(!!Cookies.get('token'))


    useEffect(() => {
        (async function () {
            const userData = await axios
                .get(`http://localhost:8000/api/about-user`, {
                    withCredentials: true,
                })
                .then(({data}) => data);
            setUser(userData.data)
            setAuth(userData.token)
        })();
    }, [])


    return (
        <StyledMain>
            {!auth
                ? (<div className='main_button'>
                    <a
                        href={`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${gitHubRedirectURL}?path=${path}&scope=user:email`}
                        className='auth-button'
                    >
                        Sign In With Github
                    </a>
                   </div>)
                : <UserPage user={user} />
            }
        </StyledMain>
    );
};

export default Main;