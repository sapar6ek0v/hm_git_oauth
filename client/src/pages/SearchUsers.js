import React, {useEffect, useState} from 'react';
import axios from "axios";
import UserCard from "../components/UserCard.js";


const SearchUsers = () => {
    const [searchUsers, setSearchUsers] = useState('')
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios(`https://api.github.com/search/users?q=${searchUsers}`)
            .then(({data}) => {
                setUsers(data.items)
                console.log(data)
            })
            .catch((e) => console.log(e))

    }, [searchUsers])


    return (
        <div>
            <input
                value={searchUsers}
                type="text"
                onChange={(e) => setSearchUsers(e.target.value)}
            />
            <p>Find: {users.length}</p>
            <div>
                {
                    users.map(user => (
                        <UserCard key={user.id} user={user} />
                    ))
                }
            </div>
        </div>
    );
};

export default SearchUsers;