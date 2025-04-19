import gitHubLogo from "../assets/github.png";

export default function Project({ classes, name, tech, deployed, gitHub }){
    return(
        <div className={classes}>
            <div>
                <a href={deployed}>
                    <h3>{name}</h3>
                </a>
                <p>{tech}</p>
                <a href={gitHub}>
                    <img src={gitHubLogo} className="github"></img>
                </a>
            </div>
        </div>
    )
}