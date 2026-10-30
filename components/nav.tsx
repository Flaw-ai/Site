"use client";

import Link from "next/link";
import "@/styles/nav.css";
import "@/styles/style.css";
import { useState } from "react";

export default function Nav() {
  const [open, setopen] = useState(false);
  
  const toggleMenu = () => {
    setopen(!open);
  };
  
  return (
    <nav className={`nav ${open ? "active" : ""}`}>
      <div className="sma" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      
      <ul>
        <div className="pol">
          <span className="pol-text">f.</span>
        </div>
        <li><Link href="/" onClick={() => setopen(false)}>Home</Link></li>
        <li><Link href="#about" onClick={() => setopen(false)}>About</Link></li>
        <li><Link href="#contact" onClick={() => setopen(false)}>Contact</Link></li>
        <li><Link href="/projects" onClick={() => setopen(false)}>Products</Link></li>
        <li><Link href="/doc" onClick={() => setopen(false)}>Documentation</Link></li>
      </ul>
    </nav>
  );
}