import gitHubLogo from "../assets/github.png";
import Project from './Project.jsx'

const projects = [
    {id: 1, classes:"flex-item book-search", name:'Book Search Engine', tech:'MERN Stack', deployed:'https://book-search-engine-9ms1.onrender.com/', gitHub: "https://github.com/augustusschwab/Book-Search-Engine"},
    {id: 2, classes:"flex-item kanban", name:'Kanban Board', tech:'REACT/Express/Node/Postgres', deployed:'https://kanban-board-mnsz.onrender.com/', gitHub: "https://github.com/augustusschwab/Kanban-Board"},
    {id: 3, classes:"flex-item candidate-search", name:'Candidate Search', tech:'REACT/TypeScript', deployed:'https://candidate-search-app-1-st2i.onrender.com/', gitHub: "https://github.com/augustusschwab/Candidate-Search-App"},
    {id: 4, classes:"flex-item cat-cap", name:'Cat Time Capsule', tech:'React/TypeScript/Node/Express', deployed:'https://cat-time-capsule.onrender.com/', gitHub: "https://github.com/augustusschwab/Cat-Time-Capsule"},
    {id: 5, classes:"flex-item weather-board", name:'Weather Dashboard', tech:'React/TypeScript/Node/Express', deployed:'https://five-day-weather-forecast-lg9r.onrender.com/', gitHub: "https://github.com/augustusschwab/Weather-Dashboard"},
    {id: 6, classes:"flex-item employee-tracker", name:'Employee Tracker', tech:'TypeScript/Node/Postgres', deployed:'https://drive.google.com/file/d/1zOuDagC7ZivhvsSLGWIie8y_dfHMK5yA/view', gitHub: "https://github.com/augustusschwab/Employee-Tracker"},
]

export default function Portfolio() {
    return(
        <>
        <div className="title">
            <h1>Portfolio</h1>
        </div>
        <div className="flex-container">
            {projects.map(project => (
                <Project
                    key={project.id}
                    classes={project.classes}
                    name={project.name}
                    tech={project.tech}
                    deployed={project.deployed}
                    gitHub={project.gitHub}
                />
            ))}
        </div>
        </>
    );
};