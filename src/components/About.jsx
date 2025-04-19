import profilePic from '../assets/profilepic.png'

export default function About() {
    return(
        <>
            <h1>About</h1>
            <img src={profilePic} className="profile-pic"></img>     
            <p> I'm a mechanical engineer at an AS 9100 certified, aerospace composite manufacturer. Currently, I'm on the development team for a recently acquired program. I previously worked on the F-35 program as a finishing and assembly manufacturing engineer. 
            I have four years of product development and manufacturing experience. I like to figure out how to build things and iterate on the process. I'm in a software development bootcamp to better understand programming and become fluet in programming languages to add to my engineering toolbelt. 
            I’m intrigued by the power of data in manufacturing processes and have delved into the topic of data science completing courses in statistics, python, and machine learning.
            My goal is to transition to a higher volume, automated manufacturing environment where I can combine my interest in data and statistics with my love for manufacturing. </p>
        </>
    );
};