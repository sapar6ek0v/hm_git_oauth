import React, {useEffect, useState} from 'react';
import axios from "axios";
import UserCard from "../components/UserCard.js";
import {Wrapper} from "./styles/SearchUsers.styled.js";
import Container from "../components/Container.js";


const SearchUsers = () => {
    const [searchUsers, setSearchUsers] = useState('')
    const [users, setUsers] = useState([])
    const [total, setTotal] = useState(0)


    useEffect(() => {
        axios(`https://api.github.com/search/users?q=${searchUsers}`)
            .then(({data}) => {
                setUsers(data.items)
                setTotal(data.total_count)
            })
            .catch((e) => console.log(e))

    }, [searchUsers])

    const handleInput = (e) => {
        setSearchUsers(e.target.value)
    }


    return (
        <Container>
            <Wrapper>
                <div className="search_block">
                    <input
                        value={searchUsers}
                        type="text"
                        placeholder='Enter user name...'
                        onChange={(e) => handleInput(e)}
                    />
                    <p>FOUND: {total}</p>
                </div>
                <div className="search_results">
                    <div className="row">
                        {
                            users.length ? users.filter(it => it.login?.toLowerCase().includes(searchUsers?.toLowerCase()) || searchUsers?.trim() === '').map(user => (
                                <UserCard key={user.id} user={user} />
                            )) : <h3>Пока ничего не найдено...</h3>
                        }
                    </div>
                </div>
            </Wrapper>
        </Container>
    );
};

export default SearchUsers;