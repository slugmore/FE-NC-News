import axios from 'axios';

const newsApi = axios.create({
    baseURL: "https://nc-news-jk.herokuapp.com/api"
})

export const getArticles = () => {
    return newsApi
    .get("/articles")
    .then(({data}) => {
        return data.articles
    })
}

