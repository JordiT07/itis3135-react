import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header>
      <h1>Jordi Trejo | ITIS 3135</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/introduction">Introduction</Link></li>
          <li><Link to="/contract">Contract</Link></li>
          <li>
            <a href="https://webpages.charlotte.edu/jtrejo/itis3135/" target="_blank" rel="noopener noreferrer">
              Main Site
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}