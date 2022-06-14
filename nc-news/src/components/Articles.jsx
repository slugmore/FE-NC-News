import { getArticles } from "../utils/api";
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Dropdown } from "react-bootstrap";

const Articles = () => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles().then((res) => {
            setArticles(res)
        })  
    }, [])

    console.log(articles, "here");

    return (

        <ul>

            {articles.map((article) => {
                
                return <Card key={article.article_id} >
                <Card.Header className="card-header">{article.title}</Card.Header>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>
                     {article.body}
                    </p>
                    <footer className="blockquote-footer">
                      {article.created_at}<cite title="Source Title"> by {article.author}</cite>
                    </footer>
              <Button variant="success">👍</Button>
              <Button variant="danger">👎</Button>
              <Button className="comments-btn">Comments ({article.comment_count})</Button>
              <p>( 0 Votes )</p>
                  </blockquote>

                </Card.Body>
              </Card>
            })}


        </ul>



    )


}

export default Articles;