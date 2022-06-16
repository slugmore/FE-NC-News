import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Accordion from 'react-bootstrap/Accordion'
import Spinner from 'react-bootstrap/Spinner'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getArticleByID } from '../utils/api'

export const SingleArticle = () => {


  const [article, setArticle] = useState({})
  const [isLoading, setIsLoading] = useState(true)

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
<Accordion.Item eventKey="1">
    <Accordion.Header>View Comments</Accordion.Header>
    <Accordion.Body>
        
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