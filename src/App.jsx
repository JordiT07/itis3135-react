import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Contract from "./pages/Contract";

export default function App() {
  return (
    <Router>
      <header>
        <h1>Jordi Trejo’s ITIS 3135 React Site</h1>
        <nav>
          <ul className="nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/introduction">Introduction</Link></li>
            <li><Link to="/contract">Contract</Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/contract" element={<Contract />} />
      </Routes>

      <footer>
        <p>&copy; 2025 Jordi Trejo | Built with React + Vite</p>
      </footer>
    </Router>
  );
}