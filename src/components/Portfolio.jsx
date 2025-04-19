import gitHubLogo from "../assets/github.png"

export default function Portfolio() {
    return(
        <>
        <h1>Portfolio</h1>
        <div class="flex-container">
                {/* Book Search Engine */}
                <div class="flex-item book-search">
                    <div>
                        <a href="https://book-search-engine-9ms1.onrender.com/">
                            <h3>Book Search Engine</h3>
                        </a>
                        <p>MERN Stack</p>
                        <a href="https://github.com/augustusschwab/Book-Search-Engine">
                            <img src={gitHubLogo} className="github"></img>
                        </a>
                    </div>
                </div>
                {/* Kanban Board */}
                <div class="flex-item kanban">
                <div>
                        <a href="https://kanban-board-mnsz.onrender.com/">
                            <h3>Kanban Board</h3>
                        </a>
                        <p>REACT/Express/Node/Postgres</p>
                        <a href="https://github.com/augustusschwab/Kanban-Board">
                            <img src={gitHubLogo} className="github"></img>
                        </a>
                    </div>
                </div>
                {/* GitHub Candidate Search */}
                <div class="flex-item candidate-search">
                    <div>
                        <a href="https://candidate-search-app-1-st2i.onrender.com/">
                            <h3>Candidate Search</h3>
                        </a>
                        <p>REACT/TypeScript</p>
                        <a href="https://github.com/augustusschwab/Candidate-Search-App">
                            <img src={gitHubLogo} className="github"></img>
                        </a>
                    </div>
                </div>
                {/* Cat Time Capsule */}
                <div class="flex-item cat-cap">
                    <div>
                        <a href="https://cat-time-capsule.onrender.com/">
                            <h3>Cat Time Capsule</h3>
                        </a>
                        <p>React/TypeScript/Node/Express</p>
                        <a href="https://github.com/augustusschwab/Cat-Time-Capsule">
                            <img src={gitHubLogo} className="github"></img>
                        </a>
                    </div>
                </div>
                {/* Weather Dashboard */}
                <div class="flex-item weather-board">
                    <div>
                        <a href="https://five-day-weather-forecast-lg9r.onrender.com/">
                            <h3>Weather Dashboard</h3>
                        </a>
                        <p>React/TypeScript/Node/Express</p>
                        <a href="https://github.com/augustusschwab/Weather-Dashboard">
                            <img src={gitHubLogo} className="github"></img>
                        </a>
                    </div>
                </div>
                {/* Employee Tracker */}
                <div class="flex-item employee-tracker">
                    <div>
                        <a href="https://drive.google.com/file/d/1zOuDagC7ZivhvsSLGWIie8y_dfHMK5yA/view">
                            <h3>Employee Tracker</h3>
                        </a>
                        <p>TypeScript/Node/Postgres</p>
                        <a href="https://github.com/augustusschwab/Employee-Tracker">
                            <img src={gitHubLogo} className="github"></img>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};