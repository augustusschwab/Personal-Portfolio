import React from "react";
import Nav from "./Navigation.jsx";
import '../styles/Header.css';

function Header({setPage}) {
    return(
        <header className="header">
            <div className="logo">
                <a href="/">Gus Schwab</a>
            </div>
            <Nav setPage={setPage}/>
        </header>
    );
};

export default Header;