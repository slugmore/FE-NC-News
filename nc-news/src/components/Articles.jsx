import { getArticles } from "../utils/api.js";
import { useState, useEffect } from "react";
import {Route, Routes, Link} from "react-router-dom"
import { ArticleNav } from "./ArticleNav.jsx";
import Spinner from 'react-bootstrap/Spinner'
import { ArticleDisplay } from "./ArticleDisplay.jsx";


const Articles = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [articles, setArticles] = useState([])
    const [topicQuery, setTopicQuery] = useState('')
    
    

    useEffect(() => {
        getArticles(topicQuery).then((res) => {
            setArticles(res)
            setIsLoading(false)
        })  
    }, [topicQuery])


    if(isLoading) return <div className="spinner"><Spinner variant="info" animation="border" /></div>
    return (
    <>

<div className="dropdown-btn">
<ArticleNav setTopicQuery={setTopicQuery}/>
</div>

<Routes>
    <Route path="/articles/football" element={<ArticleDisplay  />} />
</Routes>

<ArticleDisplay articles={articles}/>

    </>

    )


}


export default Articles;