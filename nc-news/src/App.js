import './App.css';
import {Route, Routes, Link} from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import Articles from "./components/Articles"
import Users from "./components/Users"

function App() {
  return (
    <>
    <Header />
    <section>
          <nav className="nav-bar">
            <Link className="nav-title" to="/">
              Home
            </Link>
            <Link className="nav-title" to="/articles">
              Articles
            </Link>
            <Link className="nav-title" to="/users">
              Users
            </Link>
          </nav>
      </section>

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/users" element={<Users />} />
      </Routes>



    </>
  )
}

export default App;
