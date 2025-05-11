import '../styles/Projects.css';

const Projects = () => {
  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1>My Projects</h1>
        <p>
          Here's a collection of my recent work, showcasing my skills in frontend development,
          backend systems, and algorithm implementation.
        </p>
      </div>
      
      <div className="projects-grid">
        {/* E-commerce Dashboard Project */}
        <div className="project-card" id="ecommerce-dashboard">
          <div className="project-image ecommerce-img"></div>
          <div className="project-content">
            <h2>E-commerce Dashboard</h2>
            <p>
              A comprehensive admin dashboard for e-commerce businesses with real-time analytics,
              inventory management, and customer insights. Built with React and TypeScript, it features
              responsive design and interactive data visualizations.
            </p>
            <div className="project-details">
              <div className="project-tech">
                <h3>Technologies Used</h3>
                <ul>
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>Chart.js</li>
                  <li>Material UI</li>
                  <li>Firebase</li>
                </ul>
              </div>
              <div className="project-features">
                <h3>Key Features</h3>
                <ul>
                  <li>Real-time sales analytics</li>
                  <li>Inventory management system</li>
                  <li>Customer behavior insights</li>
                  <li>Order processing workflow</li>
                  <li>Responsive admin interface</li>
                </ul>
              </div>
            </div>
            <div className="project-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">View Code</a>
              <a href="#" className="btn btn-primary">Live Demo</a>
            </div>
          </div>
        </div>
        
        {/* Algorithm Visualizer Project */}
        <div className="project-card" id="algorithm-visualizer">
          <div className="project-image algorithm-img"></div>
          <div className="project-content">
            <h2>Algorithm Visualizer</h2>
            <p>
              An interactive web application that visualizes common sorting and pathfinding algorithms.
              Users can adjust speed, input size, and see step-by-step explanations of how each algorithm works.
              This project aims to make complex algorithms more accessible and understandable.
            </p>
            <div className="project-details">
              <div className="project-tech">
                <h3>Technologies Used</h3>
                <ul>
                  <li>JavaScript</li>
                  <li>HTML5 Canvas</li>
                  <li>CSS3</li>
                  <li>Web Animation API</li>
                </ul>
              </div>
              <div className="project-features">
                <h3>Key Features</h3>
                <ul>
                  <li>Visualizations for 8+ algorithms</li>
                  <li>Adjustable animation speed</li>
                  <li>Custom input arrays</li>
                  <li>Step-by-step execution</li>
                  <li>Time and space complexity information</li>
                </ul>
              </div>
            </div>
            <div className="project-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">View Code</a>
              <a href="#" className="btn btn-primary">Live Demo</a>
            </div>
          </div>
        </div>
        
        {/* Task Management API Project */}
        <div className="project-card" id="task-management-api">
          <div className="project-image task-api-img"></div>
          <div className="project-content">
            <h2>Task Management API</h2>
            <p>
              A RESTful API built with Python and Flask for managing tasks and projects. The system includes
              user authentication, role-based permissions, and comprehensive documentation. It's designed to be
              scalable and can be integrated with various frontend applications.
            </p>
            <div className="project-details">
              <div className="project-tech">
                <h3>Technologies Used</h3>
                <ul>
                  <li>Python</li>
                  <li>Flask</li>
                  <li>SQLAlchemy</li>
                  <li>PostgreSQL</li>
                  <li>JWT Authentication</li>
                </ul>
              </div>
              <div className="project-features">
                <h3>Key Features</h3>
                <ul>
                  <li>RESTful endpoint design</li>
                  <li>User authentication & authorization</li>
                  <li>Task scheduling and reminders</li>
                  <li>Project management capabilities</li>
                  <li>Comprehensive API documentation</li>
                </ul>
              </div>
            </div>
            <div className="project-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">View Code</a>
              <a href="#" className="btn btn-primary">API Documentation</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
