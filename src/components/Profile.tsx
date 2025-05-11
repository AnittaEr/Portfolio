import '../styles/Profile.css';

const Profile = () => {
  return (
    <section className="profile-section" aria-labelledby="about-me">
      <div className="profile-container">
        <div className="profile-image-container">
          <div className="profile-image" aria-label="Profile photo of Anita Ershadi"></div>
        </div>
        <div className="profile-content">
          <h1 id="about-me">Hello, I'm Anita Ershadi</h1>
          <h2>Junior Software Engineer</h2>
          <p>
            I'm a passionate software engineer based in Tehran, Iran, with a strong foundation in full-stack development
            and a particular interest in solving complex algorithmic challenges.
          </p>
          <p>
            With a Bachelor's degree in Computer Science from Sharif University of Technology, I've developed a solid
            understanding of data structures, algorithms, and software design principles. My journey in tech began with
            my fascination for mathematics and logical puzzles, which naturally led me to programming.
          </p>
          <p>
            I'm proficient in Python, JavaScript, TypeScript, and React, and I'm continuously expanding my knowledge
            in cloud technologies and machine learning. I believe in writing clean, maintainable code and creating
            accessible user interfaces that provide excellent experiences for all users.
          </p>
          <p>
            When I'm not coding, you can find me participating in local tech meetups, contributing to open-source
            projects, or exploring Tehran's vibrant coffee shops with a good technical book.
          </p>
          <div className="profile-skills">
            <h3>Technical Skills</h3>
            <div className="skills-container">
              <span className="skill-tag">React</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Data Structures</span>
              <span className="skill-tag">Algorithms</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">Responsive Design</span>
              <span className="skill-tag">Accessibility</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
