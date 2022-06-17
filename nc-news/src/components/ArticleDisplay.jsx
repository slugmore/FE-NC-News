import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCommentsByArticleID } from "../utils/api";

import Vote from "./Vote"

export const ArticleDisplay = ({ articles }) => {
  const [articleID, setArticleID] = useState("");
  const [comments, setComments] = useState([]);
  

  useEffect(() => {
    if (articleID) {
      getCommentsByArticleID(articleID).then((res) => {
        setComments(res);
      });
    }
  }, [articleID]);

  
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

                <Vote articleID={article.article_id} articleVotes={article.votes} />
                

                <div className="comments-btn">
                  <Accordion>
                    <Accordion.Item
                      onClick={() => {
                        setArticleID(article.article_id);
                      }}
                      eventKey="1"
                    >
                      <Accordion.Header>
                        View Comments ({article.comment_count})
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul className="comments">
                          {comments.map((comment) => {
                            return (
                              <Card key={comment.id}>
                                <Card.Header>🗣 - {comment.author}</Card.Header>
                                <Card.Body>
                                  <Card.Title>{comment.created_at}</Card.Title>
                                  <Card.Text>{comment.body}</Card.Text>

                                  <section className="vote-btn">
                                    <Button variant="success">
                                      <span className="material-symbols-outlined">
                                        arrow_upward
                                      </span>
                                    </Button>
                                    <h3
                                      className={
                                        comment.votes > 0
                                          ? "green-txt"
                                          : "red-txt"
                                      }
                                    >
                                      <span className="material-symbols-outlined">
                                        thumbs_up_down
                                      </span>
                                      ({comment.votes})
                                    </h3>
                                    <Button variant="danger">
                                      <span className="material-symbols-outlined">
                                        arrow_downward
                                      </span>
                                    </Button>
                                  </section>
                                </Card.Body>
                              </Card>
                            );
                          })}
                        </ul>
                      </Accordion.Body>
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
