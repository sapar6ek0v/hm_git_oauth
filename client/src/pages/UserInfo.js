import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import UserPage from "../components/UserPage.js";

const UserInfo = () => {
    const {login} = useParams()
    const [user, setUser] = useState({})


    useEffect(() => {
        axios(`https://api.github.com/users/${login}`)
            .then(({data}) => {
                setUser(data)
                console.log(data)
            })
            .catch((e) => console.log(e))
    } , [login])

    return (
        <div>
            <UserPage user={user} />
        </div>
    );
};

export default UserInfo;