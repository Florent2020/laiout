import React from "react";

function Home() {
  return (
    <div className="home" id="home">
      <h6>The future of floor plans</h6>
      <h1>
        Our aim is to disrupt the proptech world by building a tool that will
        forever change the way floor plans are designed.
      </h1>
      <a href="/#about">
        <button>Learn more</button>
      </a>
      <div className="hero-1">
        <img
          src={
            "https://content.app-sources.com/s/5908297055308249/uploads/Images/Hero-1-0911286.png"
          }
          alt="design"
        />
      </div>
      <div className="triangle"></div>

      <a href="#top" className="btn-at-top" title="Go to top">
        <i className="fas fa-chevron-up"></i>
      </a>
    </div>
  );
}

export default Home;
