import axios from 'axios';

const newsApi = axios.create({
    baseURL: "https://nc-news-jk.herokuapp.com/api"
})

export const getArticles = (query) => {

    console.log(query);
    
    return newsApi
    .get(`/articles`, {params: {topic: query}})
    .then(({data}) => {
        return data.articles
    })
}

export const getArticleByID = (ID) => {
    console.log(ID, "<<< ID");

    return newsApi
    .get(`/articles/${ID}`)
    .then(({data}) => {
        console.log(data.article);
        return data.article
    })
}



