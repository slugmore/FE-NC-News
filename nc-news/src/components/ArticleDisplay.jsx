import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Accordion from "react-bootstrap/Accordion";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";

export const ArticleDisplay = ({ articles }) => {

  return (
    <ul>
      {articles.map((article) => {
        return (
          <Card key={article.article_id}>
            <Card.Header className="card-header">
              👤 - {article.author}
            </Card.Header>
            <Card.Body>
              <Link to={`/article/${article.article_id}`}>
                <h4>{article.title}</h4>
              </Link>

              <blockquote className="blockquote mb-0">
                <p>{article.body}</p>
                <footer className="blockquote-footer">
                  {article.created_at}
                  <cite title="Source Title"> by {article.author}</cite>
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
                  

                  <Accordion>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>View Comments</Accordion.Header>
                      <Accordion.Body></Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </blockquote>
            </Card.Body>
          </Card>
        );
      })}
    </ul>
  );
};
