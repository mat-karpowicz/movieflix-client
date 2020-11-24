import React from "react";

const Navigation: React.FC = () => {
  return (
    <nav className="nav flex flex-jc-sb flex-ai-c">
      <div className="nav-container flex">
        <h5>
          <a
            className="link nav-link"
            href="https://trello.com/b/I3EPtUfO/flix-app"
          >
            Trello
          </a>
        </h5>
        <h5>
          <a className="link nav-link" href="https://github.com/mat-karpowicz">
            GitHub
          </a>
        </h5>
      </div>
      <div className="nav-container flex">
        <h5>
          <a href="#" className="link nav-link">
            login
          </a>
        </h5>
      </div>
    </nav>
  );
};

export default Navigation;
