import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import ReposCard from "../components/ReposCard.js";

const ReposInfo = () => {
    const {owner} = useParams()
    const {repos} = useParams()
    const [userRepos, setUserRepos] = useState({})
    const [language, setLanguage] = useState({})
    const [readmeMd, setReadmeMd] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const p1 = axios(`https://api.github.com/repos/${owner}/${repos}`)
            .then(({data}) => {
                setUserRepos(data)
            })
            .catch((e) => console.log(e))

        const p2 = axios(`https://api.github.com/repos/${owner}/${repos}/languages`)
            .then(({data}) => {
                setLanguage(data)
            })
        const p3 = axios(`https://raw.githubusercontent.com/${owner}/${repos}/master/README.md`)
            .then(({data}) => setReadmeMd(data))

        Promise.all([p1,  p2, p3])
            .then(() => setLoading(false))
    },[])
    return (
        <div>
           <ReposCard repos={userRepos} languages={language} readmeMD={readmeMd} />
        </div>
    );
};

export default ReposInfo;