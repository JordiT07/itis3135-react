import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Contract from "./pages/Contract";

export default function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <header>
          <h1>Jordi Trejo | ITIS 3135</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/introduction">Introduction</Link></li>
              <li><Link to="/contract">Contract</Link></li>
            </ul>
          </nav>
        </header>

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/contract" element={<Contract />} />
          </Routes>
        </main>

        <footer>
          <p>Trejo Industry – Fix All Your Tech Problems</p>
          <p>© 2025 Jordi Trejo</p>
          <p>
            <a href="https://webpages.charlotte.edu/jtrejo/itis3135/" target="_blank" rel="noopener noreferrer">Course Home</a> |
            <a href="https://validator.w3.org/" target="_blank" rel="noopener noreferrer">HTML Validator</a> |
            <a href="https://jigsaw.w3.org/css-validator/" target="_blank" rel="noopener noreferrer">CSS Validator</a>
          </p>
        </footer>
      </div>
    </Router>
  );
}