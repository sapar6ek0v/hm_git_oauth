import React from 'react';
import ReactMarkdown from "react-markdown";

const ReposCard = ({readmeMD, languages, repos}) => {
    return (
        <div>
            <div>
                {
                    readmeMD ? <ReactMarkdown >
                            {readmeMD}
                        </ReactMarkdown>
                        : <img src='' alt=""/>
                }
            </div>
            <div>
                <h3>{repos.full_name}</h3>
                <p>{repos.visibility}</p>
                <div>{repos.description || '-'}</div>
                <div>
                    {
                        Object.keys(languages).map(it => {
                            return <div>{it}:{(+languages[it])}</div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default ReposCard;