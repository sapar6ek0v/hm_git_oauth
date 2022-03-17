import React from 'react';
import {useNavigate} from "react-router-dom";
import {StyledHeader} from "./styles/Header.styled.js";
import Container from "./Container.js";

const Header = () => {
    const navigate = useNavigate()


    return (
        <StyledHeader>
            <Container>
                <div className="header">
                    <button onClick={() => navigate('/')}>Home</button>
                    <button onClick={() => navigate('/search_users')}>Another Users</button>
                </div>
            </Container>
        </StyledHeader>
    );
};

export default Header;