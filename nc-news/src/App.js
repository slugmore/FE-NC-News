import './App.css';
import {Route, Routes, Link} from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import Articles from "./components/Articles"
import Users from "./components/Users"
import { SingleArticle } from './components/SingleArticle';
import {useState} from 'react'




function App() {


 

  return (
    <>
    <Header />
    <section>
          <nav className="nav-bar">
            <Link className="nav-title" to="/">
            <span class="material-symbols-outlined">
home
</span>
            </Link>
            <Link className="nav-title" to="/articles">
            <span class="material-symbols-outlined">
menu_book
</span>
            </Link>
            <Link className="nav-title" to="/users">
            <span class="material-symbols-outlined">
person_search
</span>
            </Link>
          </nav>
      </section>

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/users" element={<Users />} />
          <Route path="/articles/:category_name" element={<Articles />} />
          <Route path="/article/:article_id" element={<SingleArticle />} />
      </Routes>



    </>
  )
}

export default App;
