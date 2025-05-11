import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Algorithms from './pages/Algorithms';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ScrollToAnchor from './components/ScrollToAnchor';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <ScrollToAnchor />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/algorithms" element={<Algorithms />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            {/* Additional routes can be added here */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <footer className="footer">
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} Anita Ershadi. All rights reserved.</p>
            <div className="footer-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
              <a href="mailto:contact@example.com" aria-label="Email">Email</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
