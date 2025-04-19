export default function Resume() {
    return(
        <>
            <div class="container">
                <h1 className="center">Resume</h1>
            
                <p>Passionate and detail-oriented junior software developer with experience in building dynamic web applications. Seeking to leverage a strong foundation in full-stack development, problem-solving, and collaborative teamwork to contribute to a growing tech team. Eager to continue learning and developing expertise in new technologies while delivering quality software solutions.</p>

                <h3 class="section-title">Skills</h3>
                <ul class="skills-list">
                    <li>Programming Languages: JavaScript (ES6+), TypeScript, Python, Java, SQL</li>
                    <li>Web Development: HTML, CSS, React, Node.js, Express.js, RESTful APIs</li>
                    <li>Databases: PostgreSQL, MongoDB, MySQL</li>
                    <li>Version Control: Git, GitHub, GitLab</li>
                    <li>Tools & Technologies: Docker, npm, Webpack, Jest, Cypress</li>
                    <li>Development Practices: Agile, Test-Driven Development (TDD), Continuous Integration (CI)</li>
                    <li>Operating Systems: macOS, Linux, Windows</li>
                </ul>

                <h3 class="section-title">Education</h3>
                <ul class="education-list">
                    <li><strong>Bachelor of Science in Mechanical Engineering</strong><br></br>
                        University of Utah | Graduation Date: May 2016</li>
                </ul>

                <h3 class="section-title">Projects</h3>
                <ul class="projects-list">
                    <li><strong>Portfolio Website</strong> - Developed a personal portfolio website using React and styled with CSS and Bootstrap. Integrated contact forms using EmailJS and deployed on Netlify.</li>
                    <li><strong>Task Manager App</strong> - Built a task management application using Node.js, Express.js, and MongoDB. Implemented user authentication and authorization using JWT and deployed the app on Heroku.</li>
                    <li><strong>Weather Dashboard</strong> - Designed a weather dashboard using the OpenWeatherMap API to dynamically display weather conditions. Implemented responsive design with CSS.</li>
                </ul>

                <h3 class="section-title">Experience</h3>
                <ul class="experience-list">
                    <li><strong>Freelance Web Developer</strong><br></br>
                        Self-Employed | January 2021 – Present<br></br>
                        Built and maintained websites for small businesses, enhancing user experience by improving performance and responsiveness across different devices.
                    </li>
                </ul>

                <h3 class="section-title">Certifications</h3>
                <ul class="certifications-list">
                    <li>JavaScript Algorithms and Data Structures – FreeCodeCamp, 2022</li>
                    <li>React Developer – Codecademy, 2023</li>
                    <li>SQL for Data Science – Coursera, 2023</li>
                </ul>

                <h3 class="section-title">Additional Information</h3>
                <ul class="additional-info-list">
                    <li>Actively contributing to open-source projects on GitHub.</li>
                    <li>Participated in Hacktoberfest 2022, making 10 pull requests to open-source repositories.</li>
                    <li>Regularly attend local meetups and online coding communities to stay current with industry trends.</li>
                </ul>
            </div>
        </>
    );
};