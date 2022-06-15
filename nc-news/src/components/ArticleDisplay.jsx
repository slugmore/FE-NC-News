import { getCommentsByArticleID } from "../utils/api.js";
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Accordion from 'react-bootstrap/Accordion'
import Spinner from 'react-bootstrap/Spinner'

export const ArticleDisplay = ({articles}) => {

    const [commentID, setCommentID] = useState('')
    const [comments, setComments] = useState([])

    useEffect(() => {
        getCommentsByArticleID(commentID).then((res) => {
            setComments(res)
        })  
    }, [commentID])


    return (

        <ul>

            {articles.map((article) => {
                return <Card key={article.article_id} >
                <Card.Header className="card-header">👤 - {article.author}</Card.Header>
                <Card.Body>
                    <h4>{article.title}</h4>
                  <blockquote className="blockquote mb-0">
                    <p>
                     {article.body}
                    </p>
                    <footer className="blockquote-footer">
                      {article.created_at}<cite title="Source Title"> by {article.author}</cite>
                    </footer>
               <section className="vote-btn">
              <Button variant="success">👍</Button>
              <p>( 0 Votes )</p>
              <Button variant="danger">👎</Button>
              </section>
              
              <div className="comments-btn">
              <>
  <FloatingLabel controlId="floatingTextarea" label="Leave Comment" className="comment">
    <Form.Control as="textarea" placeholder="Leave a comment here" />
  </FloatingLabel>
  </>
    
     <Button variant="dark">Submit Comment</Button>



<Accordion>
<Accordion.Item onClick={() => {setCommentID(article.article_id)}} eventKey="1">
    <Accordion.Header>View Comments ({article.comment_count})</Accordion.Header>
    <Accordion.Body>
        <ul className="comments">
      {comments.map((comment) => {
          return (
         
          <Card key={comment.id}>
  <Card.Header>👤 {comment.author}</Card.Header>
  <Card.Body>
    <Card.Title>{comment.created_at}</Card.Title>
    <Card.Text>
      {comment.body}
    </Card.Text>
     
     <section className="vote-btn">
    <Button variant="success">👍</Button>
    <p>({comment.votes} Votes)</p>
    <Button variant="danger">👎</Button>
     </section>  
           
  </Card.Body>
</Card>)
      })}

      </ul>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
              </div>
                  </blockquote>

                </Card.Body>
              </Card>
            })}


        </ul>
    )

}