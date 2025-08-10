import "./about.css";
// import "../../index.css";
import JoshBodyPhoto from "../assets/images/Jheadshot.png"

function About() {
  return (
    <div className="aboutp">
      <section className="aboutp-intro">
        <div className="aboutp-intro-text">
          <h1>My name is Joshua Hill.</h1>
          <p>I am a creative thinker with a <span className="highlighted">focus on building data driven insights</span> and helping  <span className="highlighted">make informed decisions through data analytics</span>. I have a passion for <span className="highlighted">building user interfaces</span> and enjoy working with the <span className="highlighted">latest technologies</span> to build innovative solutions that <span className="highlighted">solve real-world problems</span>. While I still appreciate thoughtful design and user experience, I've picked up an <span className="highlighted">understanding of SQL, Python, Power BI, and other data analytic skills</span>, I continue to develop my skills further and <span className="highlighted">apply them to real world projects</span>.
          <br />
          <br /><span className="highlighted">I enjoy video games</span>, allowing my mind to be <span className="highlighted">immersed in a different setting</span> while playing, as it is something I gravitated to in my childhood and plays a factor in <span className="highlighted">where I get my creativity</span> and <span className="highlighted">problem solving skills</span>. Similarly, <span className="highlighted">I enjoy long bike rides</span> and continue practicing <span className="highlighted">martial arts</span>. I also spend time learning a new language &#40;currently studying Japanese&#41;, reading books, and catching up on YouTube videos.</p>
        </div>
        <img src={JoshBodyPhoto} alt="An image of me" />
      </section>
      <div className="certificates">
        
      </div>
    </div>
  );
}

export default About;