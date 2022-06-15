import axios from 'axios';

const newsApi = axios.create({
    baseURL: "https://nc-news-jk.herokuapp.com/api"
})

export const getArticles = (query) => {
    
    return newsApi
    .get(`/articles`, {params: {topic: query}})
    .then(({data}) => {
        return data.articles
    })
}


