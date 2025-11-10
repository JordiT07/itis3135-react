import React from "react";

export default function Home() {
  return (
    <section className="content">
      <h2>Welcome to Jordi Trejo’s React Site</h2>
      <p>
        This is the React-based version of my ITIS 3135 project. It mirrors my original course site,
        rebuilt using React and Vite for faster and modular development.
      </p>
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/USS_Carl_Vinson_%28CVN-70%29.jpg" alt="Navy ship" className="hero-img" />
    </section>
  );
}