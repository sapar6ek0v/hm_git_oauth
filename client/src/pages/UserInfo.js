import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import UserPage from "../components/UserPage.js";
import Loader from "../components/Loader.js";

const UserInfo = () => {
    const {login} = useParams()
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        axios(`https://api.github.com/users/${login}`)
            .then(({data}) => {
                setUser(data)
                setLoading(false)
            })
            .catch((e) => console.log(e))
    } , [login])

    if (loading) return <Loader />

    return (
        <div>
            <UserPage user={user} />
        </div>
    );
};

export default UserInfo;