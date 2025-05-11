import { Link } from 'react-router-dom';
import Profile from '../components/Profile';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Building Solutions with Code</h1>
          <p>Junior Software Engineer specializing in full-stack development and algorithm optimization</p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">View My Work</Link>
            <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
          </div>
        </div>
      </section>
      
      <Profile />
      
      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="featured-grid">
            <div className="featured-card">
              <div className="featured-image project-1"></div>
              <div className="featured-content">
                <h3>E-commerce Dashboard</h3>
                <p>A responsive admin dashboard with data visualization and user management features.</p>
                <div className="featured-tags">
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>Chart.js</span>
                </div>
                <Link to="/projects#ecommerce-dashboard" className="featured-link">View Project</Link>
              </div>
            </div>
            
            <div className="featured-card">
              <div className="featured-image project-2"></div>
              <div className="featured-content">
                <h3>Algorithm Visualizer</h3>
                <p>Interactive tool for visualizing common sorting and pathfinding algorithms.</p>
                <div className="featured-tags">
                  <span>JavaScript</span>
                  <span>Canvas API</span>
                  <span>Algorithms</span>
                </div>
                <Link to="/projects#algorithm-visualizer" className="featured-link">View Project</Link>
              </div>
            </div>
            
            <div className="featured-card">
              <div className="featured-image project-3"></div>
              <div className="featured-content">
                <h3>Task Management API</h3>
                <p>RESTful API for task management with authentication and permission controls.</p>
                <div className="featured-tags">
                  <span>Python</span>
                  <span>Flask</span>
                  <span>SQLAlchemy</span>
                </div>
                <Link to="/projects#task-management-api" className="featured-link">View Project</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
