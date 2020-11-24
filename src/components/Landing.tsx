import React from "react";

const Landing: React.FC = () => {
  return (
    <div className="landing-container flex flex-col flex-jc-c">
      <h1 className="landing-title">Rate and track your favourite movies</h1>
      <div className="landing-btns flex flex-jc-sa">
        <button className="btn">about</button>
        <button className="btn">register</button>
      </div>
    </div>
  );
};

export default Landing;
