import "../styles/About.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Me</h1>
        <p>
          Learn more about my background, skills, and what drives me as a
          software engineer.
        </p>
      </div>

      <div className="about-container">
        <div className="about-image-container">
          <div className="about-image"></div>
        </div>

        <div className="about-content">
          <h2>My Journey</h2>
          <p>
            Hello! I'm Anita Ershadi, a junior software engineer with a passion
            for creating elegant solutions to complex problems. My journey in
            tech began during my undergraduate studies at Sharif University of
            Technology in Tehran, where I earned my Bachelor's degree in
            Computer Science.
          </p>

          <p>
            My interest in programming was sparked during a high school
            mathematics competition, where I discovered the fascinating
            intersection of logical thinking and creative problem-solving. This
            led me to pursue computer science, where I found my calling in
            software development.
          </p>

          <p>
            Throughout my academic career, I focused on building a strong
            foundation in algorithms, data structures, and software design
            principles. I've worked on various projects ranging from web
            applications to algorithm visualizations, always striving to write
            clean, efficient, and accessible code.
          </p>

          <h2>Professional Philosophy</h2>
          <p>
            I believe that great software is not just about functionality, but
            also about user experience and accessibility. I'm committed to
            creating applications that are intuitive, responsive, and inclusive.
            I approach each project with a focus on both technical excellence
            and human-centered design.
          </p>

          <p>
            As a junior developer, I value continuous learning and growth. I
            actively seek feedback, embrace challenges, and constantly expand my
            knowledge through online courses, technical books, and community
            involvement. I'm particularly interested in frontend development,
            algorithm optimization, and exploring emerging technologies.
          </p>

          <h2>Beyond Coding</h2>
          <p>
            When I'm not coding, you can find me exploring Tehran's vibrant
            coffee shops with a good book, participating in local tech meetups,
            or contributing to open-source projects. I also enjoy hiking in the
            beautiful mountains surrounding Tehran and practicing calligraphy,
            which helps me maintain balance and creativity.
          </p>

          <p>
            I'm excited about the opportunity to collaborate on meaningful
            projects and continue growing as a software engineer. If you're
            interested in working together or just want to connect, please don't
            hesitate to reach out!
          </p>
        </div>
      </div>

      <div className="skills-section">
        <h2>Technical Skills</h2>

        <div className="skills-container">
          <div className="skill-category">
            <h3>Frontend Development</h3>
            <div className="skill-bars">
              <div className="skill-item">
                <span className="skill-name">React</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: "85%" }}></div>
                </div>
                <span className="skill-percentage">85%</span>
              </div>

              <div className="skill-item">
                <span className="skill-name">JavaScript</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: "90%" }}></div>
                </div>
                <span className="skill-percentage">90%</span>
              </div>

              <div className="skill-item">
                <span className="skill-name">TypeScript</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: "80%" }}></div>
                </div>
                <span className="skill-percentage">80%</span>
              </div>

              <div className="skill-item">
                <span className="skill-name">HTML/CSS</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: "95%" }}></div>
                </div>
                <span className="skill-percentage">95%</span>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3>Backend Development</h3>
            <div className="skill-bars">
              <div className="skill-item">
                <span className="skill-name">Python</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: "90%" }}></div>
                </div>
                <span className="skill-percentage">90%</span>
              </div>

              <div className="skill-item">
                <span className="skill-name">Node.js</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: "75%" }}></div>
                </div>
                <span className="skill-percentage">75%</span>
              </div>

              <div className="skill-item">
                <span className="skill-name">SQL</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: "85%" }}></div>
                </div>
                <span className="skill-percentage">85%</span>
              </div>

              <div className="skill-item">
                <span className="skill-name">RESTful APIs</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: "80%" }}></div>
                </div>
                <span className="skill-percentage">80%</span>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3>Tools & Practices</h3>
            <div className="skill-bars">
              <div className="skill-item">
                <span className="skill-name">Git</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: "85%" }}></div>
                </div>
                <span className="skill-percentage">85%</span>
              </div>

              <div className="skill-item">
                <span className="skill-name">Testing</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: "70%" }}></div>
                </div>
                <span className="skill-percentage">70%</span>
              </div>

              <div className="skill-item">
                <span className="skill-name">Agile/Scrum</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: "75%" }}></div>
                </div>
                <span className="skill-percentage">75%</span>
              </div>

              <div className="skill-item">
                <span className="skill-name">Accessibility</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: "80%" }}></div>
                </div>
                <span className="skill-percentage">80%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
