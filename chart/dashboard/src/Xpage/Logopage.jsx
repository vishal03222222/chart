import React from "react";
import "./header.css";

const Logopage = () => {
  return (
    <header className="header">
      <div className="logo">Connexia</div>
      <div className="user-section">
        <div className="greeting">Hello, Jason</div>
        <div className="buttons">
          <button className="btn btn-insights">My Insights</button>
          <button className="btn btn-apps">My Apps</button>
        </div>
      </div>
      <div className="actions">
        <input type="text" placeholder="Search" className="search-bar" />
        <div className="icons">
          <span className="icon">🔔</span>
          <span className="icon">👤</span>
        </div>
        <button className="add-btn">+</button>
      </div>
    </header>
  );
};

export default Logopage;
