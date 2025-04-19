import '../styles/Footer.css';
import gitHubLogo from "../assets/github.png";
import linkedInLogo from "../assets/linkedin.png";

function Footer() {
    return(
        <footer>
            {/* <div className="footer-nav"> */}
                <ul className="footer-nav footer-links">
                    <li><a href="/"><img src={gitHubLogo} className="icon"></img></a></li>
                    <li><a href="/"><img src={linkedInLogo} className="icon"></img></a></li>
                </ul>
            {/* </div> */}
        </footer>
    );
}

export default Footer;