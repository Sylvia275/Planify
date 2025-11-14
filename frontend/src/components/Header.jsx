import React from "react";

export default function Header() {
  return (
    <header className="site-header">
      <div className="brand">Planify</div>
      <div className="header-icons">
        <button className="icon-btn">🌐</button>
        <button className="icon-btn">🔔</button>
        <button className="icon-btn">👤</button>
      </div>
    </header>
  );
}
