import React from "react";
import '../styles/Header.css';

function Header({setPage}) {
    return(
        <header className="header">
            <div className="logo">
                <a href="/">My Logo</a>
            </div>
            <nav className="navbar">
                <ul className="nav-links">
                    <li><a href="#About" onClick={()=>setPage("About")}>About Me</a></li>
                    <li><a href="#Portfolio" onClick={()=>setPage("Portfolio")}>Portfolio</a></li>
                    <li><a href="#Contact" onClick={()=>setPage("Contact")}>Contact</a></li>
                    <li><a href="#Resume" onClick={()=>setPage("Resume")}>Resume</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;