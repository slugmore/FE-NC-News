import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Articles from "./components/Articles";
import { SingleArticle } from "./components/SingleArticle";
// import { useState } from "react";
import PostArticle from "./components/PostArticle";

function App() {
  return (
    <>
      <Header />
      <section>
        <nav className="nav-bar">
          <Link className="nav-title" to="/">
            <span className="material-symbols-outlined">home</span>
          </Link>
          <Link className="nav-title" to="/articles">
            <span className="material-symbols-outlined">menu_book</span>
          </Link>
          <Link className="nav-title" to="/post">
            <span className="material-symbols-outlined">post_add</span>
          </Link>
        </nav>
      </section>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/post" element={<PostArticle />} />
        <Route path="/articles/:category_name" element={<Articles />} />
        <Route path="/article/:article_id" element={<SingleArticle />} />
      </Routes>
    </>
  );
}

export default App;
