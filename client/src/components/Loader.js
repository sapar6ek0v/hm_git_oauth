import React from 'react';
import {Bars} from "react-loader-spinner";
import {StyledLoader} from "./styles/Loader.styled.js";

const Loader = () => {
    return (
        <StyledLoader>
            <Bars heigth="100" width="100" color="green" arialLabel="loading-indicator" />
        </StyledLoader>
    );
};

export default Loader;