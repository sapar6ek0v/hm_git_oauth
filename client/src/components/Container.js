import React from 'react';
import {StyledContainer} from "./styles/Container.styled.js";

const Container = ({children}) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    );
};

export default Container;