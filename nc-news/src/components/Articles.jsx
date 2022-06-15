import { getArticles } from "../utils/api.js";
import { useState, useEffect } from "react";
import {Route, Routes, Link, useParams} from "react-router-dom"
import { ArticleNav } from "./ArticleNav.jsx";
import Spinner from 'react-bootstrap/Spinner'
import { ArticleDisplay } from "./ArticleDisplay.jsx";


const Articles = () => {
    
    const [isLoading, setIsLoading] = useState(true)
    const [articles, setArticles] = useState([])
    
    const {category_name} = useParams()

    useEffect(() => {
        getArticles(category_name).then((res) => {
            setArticles(res)
            setIsLoading(false)
        })  
    }, [category_name])


    if(isLoading) return <div className="spinner"><Spinner variant="info" animation="border" /></div>
    return (
    <>

<div className="dropdown-btn">
<ArticleNav />
</div>
<ArticleDisplay articles={articles}/>

    </>
 )
}


export default Articles;