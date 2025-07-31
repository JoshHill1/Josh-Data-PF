import './Home.css';
import "../index.css";
import ImAText from "../components/ImaTxt.jsx"
import JHeadshot from '../assets/images/JHeadshot.png'
import 'boxicons'
// import HAbout from "../components/HAbout.jsx";

import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className="hero">
        <h1 className='outfit-font'>Hi, I'm Josh</h1>
        <div id="flex-for-homep">
          <div className="left-of-homep">
            <h2>
              From Design to Data.
            </h2>
            <p className='outfit-font'>
              I'm currently learning how to be a data analyst. With a background in graphic design, I'm focusing on data visualization and the impact it has on decision-making.
            </p>
            {/* <p className='outfit-font'>
              With a growing passion for AI, I've transitioned from front-end design into deepening my understanding of how important data is and how it powers the world. I'm drawn towards data visualization and the impact it has on decision-making. I want to help build systems that transform data into real insights. As AI continues to evolve, I'm excited to grow alongside it, using it to my advantage in this evolving AI-age. 
            </p> */}
            {/* <p className='outfit-font'>
              I have a background in front-end design, my passion for AI has evolved to focus on data driven descisions and understand the impact it has. I've gained knowledge of getting information and developing insights to help make informed decisions. I'm eager to help build systems that transform data into real insights. As AI continues to evolve, I'm excited to grow alongside it, using it to my advantage in this evolving AI-age. 
            </p> */}
            <Link to="/projects" className='my-work-btn'>View My Work</Link>
          </div>
          <div className="right-of-homep">
            <div className="me-and-social-btns">
              <div className="me-cover">
                <Link to="/about">
                  <img
                    className='me-cover-img'
                    src={JHeadshot}
                    alt="A headshot of what I look like."
                    />
                </Link>
                <div className="learn-more-text-in-headshot">
                  <p>Learn More About Me :&#41;</p>
                </div>
              </div>
              <div className="social-btns">
                <a target="_blank" href="https://www.linkedin.com/in/joshuahillaz0d/" style={{ "--i": 4 }}><i className='bx bxl-linkedin-square' ></i></a>
                <a target="_blank" href="https://github.com/JoshHill1" style={{ "--i": 3 }}><i className='bx bxl-github'></i></a>
                <a target="_blank" href="https://medium.com/@jjhi11240" style={{ "--i": 2 }}><i className='bx bxl-medium' ></i></a>
                <a target="_blank" href="https://www.instagram.com/josh_hil1/" style={{ "--i": 1 }}><i className='bx bxl-instagram-alt'></i></a>
              </div>
            </div>
            <div id="imatextflex">
              <p>I'm A</p>
              <ImAText />
            </div>
          </div>
        </div>
      </div>
      {/* <HAbout /> */}
    </div>
    
  );
}

export default Home;