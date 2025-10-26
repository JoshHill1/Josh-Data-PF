import React from "react";
import "./HAbXPRec.css";
import 'boxicons'

function HAbXPRec() {
  return (
    <div className="profile-container">
      <div className="column about">
        <h2>About Me</h2>
        <p>
          I first got into design when I studied at Arizona State University, where I studied Graphic Information Technology. From there, I got a taste of web design and development, which led me to pursue a career in front-end design. Over the years, my passion towards design has evolved to focus on data driven decisions and understanding the impact it has.
        </p>
        <p>
          My passion right now is to collect data and uncover insights through data visualization. I want to help capture, organize, and present data in a way that is easy to understand and actionable. My adaptability allows me to thrive in dynamic environments, continuously learning and evolving to meet the demands of the ever-changing data landscape.
        </p>
        <p>
          In addition to my day-to-day work, I love to catch up on the latest AI news and trends, continue learning the technologies of Data Analysis, and work on personal projects that challenge my skills and creativity. I also enjoy keeping my knowledge sharp with building projects and understanding different ways on how to build with different tools.
        </p>
        <a target="_blank" className="link-highlight" href="https://www.linkedin.com/in/joshuahillaz0d/">Connect with me on LinkedIn</a>
      </div>

      <div className="column experience">
        <h2>Experience</h2>
        <div className="experience-item">
          <p className="date">July 2025 — Current</p>
          <h4>INTERN, DATA ANALYST <span>/ Rand Technology</span></h4>
          <p>As an intern, I built reports for the company using Excel and gathered insightful data by running SQL queries. I also helped automate repetative tasks with Python.</p>
        </div>
        <div className="experience-item">
          <p className="date">March 2025</p>
          <h4>WEB DEVELOPER <span>/ Freelance</span></h4>
          <p>Built and deployed a website that fit the clients design expectations.</p>
        </div>
        <div className="experience-item">
          <p className="date">March 2025</p>
          <h4>LOGO DESIGNER <span>/ Freelance</span></h4>
          <p>Helped the client pick out what fonts they want and helped design the look that fit their style.</p>
        </div>
      </div>

      <div className="column recent">
        <h2>Recent</h2>
        <ul className="recent-posts">
          <li><a target="_blank" href="https://github.com/JoshHill1/Calculating-Free-to-Paid-Conversion-Rate-with-SQL"><i className='bx bxl-github'></i>Calculating Free to Paid Conversion Rate with SQL Project</a></li>          
          <li><a target="_blank" href="https://medium.com/@jjhi11240/mysql-journey-4a0576b63ff4"><i className='bx bxl-medium' ></i>MySQL Journey</a></li>          
          <li><a target="_blank" href="https://medium.com/@jjhi11240/hello-world-1fe44f85ab6f"><i className='bx bxl-medium' ></i>Hello World</a></li>
        </ul>
      </div>
    </div>
  );
}

export default HAbXPRec;