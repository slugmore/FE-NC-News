import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Accordion from 'react-bootstrap/Accordion'
import Spinner from 'react-bootstrap/Spinner'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getArticleByID,getCommentsByArticleID } from '../utils/api'

export const SingleArticle = () => {


  const [article, setArticle] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [commentID, setCommentID] = useState('')
  const [comments, setComments] = useState([])

    useEffect(() => {
        getCommentsByArticleID(commentID).then((res) => {
            setComments(res)
        })  
    }, [commentID])

  const {article_id} = useParams()


  useEffect(() => {
    getArticleByID(article_id).then((res) => {
        setArticle(res)
        setIsLoading(false)
    })  
}, [article_id])

    if(isLoading) return <div className="spinner"><Spinner variant="info" animation="border" /></div>
    return (

        <>
<section className='back-btn'>
    <Link to="/articles">
              <Button variant='dark' > <span class="material-symbols-outlined">
arrow_back
</span></Button>
    </Link>
    </section>
           
            <Card key={article.article_id} >
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
              <Button variant="success"><span class="material-symbols-outlined">
thumb_up
</span></Button>
<h3><span class="material-symbols-outlined">
thumbs_up_down
</span> ( 0 )</h3>
              <Button variant="danger"><span class="material-symbols-outlined">
thumb_down
</span></Button>
              </section>
              
              <div className="comments-btn">
              <>


              <Accordion>
<Accordion.Item onClick={() => {setCommentID(article.article_id)}} eventKey="1">
    <Accordion.Header>View Comments ({article.comment_count})</Accordion.Header>
    <Accordion.Body>
        <ul className="comments">
      {comments.map((comment) => {
          return (
         
          <Card key={comment.id}>
  <Card.Header>🗣 - {comment.author}</Card.Header>
  <Card.Body>
    <Card.Title>{comment.created_at}</Card.Title>
    <Card.Text>
      {comment.body}
    </Card.Text>
     
     <section className="vote-btn">
    <Button variant="success"><span class="material-symbols-outlined">
arrow_upward
</span></Button>
    <h3 className={comment.votes > 0 ? "green-txt" : "red-txt"}><span class="material-symbols-outlined">
thumbs_up_down
</span>({comment.votes})</h3>
    <Button variant="danger"><span class="material-symbols-outlined">
arrow_downward
</span></Button>
     </section>  
           
  </Card.Body>
</Card>)
      })}

      </ul>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>


  <FloatingLabel controlId="floatingTextarea" label="Leave Comment" className="comment">
    <Form.Control as="textarea" placeholder="Leave a comment here" />
  </FloatingLabel>
  </>
    
     <Button variant="dark">Submit Comment</Button>



              </div>
                  </blockquote>

                </Card.Body>
              <Button variant='dark' > <span class="material-symbols-outlined">
send
</span></Button>
              </Card>


  

        </>
    )

}