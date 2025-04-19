export default function Nav({setPage}){
    return(
        <nav className="navbar">
            <ul className="nav-links">
                <li><a href="#About" onClick={()=>setPage("About")}>About Me</a></li>
                <li><a href="#Portfolio" onClick={()=>setPage("Portfolio")}>Portfolio</a></li>
                <li><a href="#Contact" onClick={()=>setPage("Contact")}>Contact</a></li>
                <li><a href="#Resume" onClick={()=>setPage("Resume")}>Resume</a></li>
            </ul>
        </nav>
    );
};