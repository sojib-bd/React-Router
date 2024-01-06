import React from 'react';

import './AboutPage.css'

const About = () => {
  return (
    <div className="aboutPage">
      <h2>About React Router</h2>
      <p>
        React Router is a powerful navigation library for React applications that enables seamless
        client-side routing in Single Page Applications (SPAs). It eliminates the need for full-page
        reloads, providing a smoother and more dynamic user experience.
      </p>

      <h3>Key Features:</h3>
      <ul>
        <li>Declarative Routing</li>
        <li>Dynamic Routing with URL Parameters</li>
        <li>Nested Routes for Complex Applications</li>
      </ul>

      <h3>How to Implement React Router:</h3>
      <p>
        To get started with React Router, you'll need to install it first:
      </p>
      <pre>
        <code>
          {`npm install react-router-dom`}
        </code>
      </pre>

      <p>
        Once installed, you can import the necessary components and start defining routes in your
        application. Here's a basic example:
      </p>
      <pre>
        <code>
          {`
            import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

            function App() {
              return (
                <Router>
                  <div>
                    <nav>
                      <ul>
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/about">About</Link>
                        </li>
                        {/* Add more navigation links as needed */}
                      </ul>
                    </nav>

                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    {/* Add more Route components for additional pages */}
                  </div>
                </Router>
              );
            }
          `}
        </code>
      </pre>

      

    </div>
  );
}

export default About;
