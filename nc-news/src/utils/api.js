import axios from 'axios';

const newsApi = axios.create({
    baseURL: "https://nc-news-jk.herokuapp.com/api"
})

export const getArticles = (query) => {
    
    return newsApi
    .get(`/articles${query}`)
    .then(({data}) => {
        return data.articles
    })
}

export const getCommentsByArticleID = (ID) => {

    return newsApi
    .get(`/articles/${ID}/comments`)
    .then(({data}) => {
        return data.comments;
    })

}

