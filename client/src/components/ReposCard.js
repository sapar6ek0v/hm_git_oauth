import React from 'react';
import ReactMarkdown from "react-markdown";
import notFound from '../images/notFound.png'
import Container from "./Container.js";
import {Wrapper} from "./styles/ReposCard.styled.js";

const ReposCard = ({readmeMD,repos}) => {
    return (
        <Container>
            <Wrapper>
                <div className='repos_readme'>
                    {
                        readmeMD ? <ReactMarkdown >
                                {readmeMD}
                            </ReactMarkdown>
                            : <img src={notFound} alt="not-found"/>
                    }
                </div>
                <div>
                    <p>{repos.full_name}</p>
                    <p>{repos.visibility}</p>
                    <p>{repos.description || 'no description'}</p>
                </div>
            </Wrapper>
        </Container>
    );
};

export default ReposCard;