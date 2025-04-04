import {BrowserRouter as Router, Link, Route, Routes} from 'react-router'
import './App.css'
import Home from "./pages/home.tsx";
import About from "./pages/about.tsx";
import Projects from "./pages/projects.tsx";
import Contact from "./pages/contact.tsx";

function App() {
  return (
    <Router>
        <div className="container">
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/projects"}>Projects</Link>
                <Link to={"/contact"}>Contact</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/projects" element={<Projects />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
        </div>
    </Router>
  )
}

export default App
