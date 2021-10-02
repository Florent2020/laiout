import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About() {
  return (
    <div className="about" id="about">
      <div className="container">
        <Row>
          <Col sm={12} md={6} className="left-text">
            <h2>We are launching laiout.</h2>
            <h2>
              The first AI powered design tool <br />
              to help you generate floor plans.
            </h2>
            <span>
              We are fully backed by world's largest early-stage VC, Antler.
            </span>
            <img
              src={
                "https://content.app-sources.com/s/5908297055308249/uploads/Images/logos2-1452369.jpg"
              }
              alt="logo-2"
            />
          </Col>
          <Col sm={12} md={6} className="right-text">
            <div>
              <h4>Faster</h4>
              <span>
                What used to take weeks of work and many iterations can now be
                done within a matter of clicks
              </span>
            </div>
            <div>
              <span className="line"></span>
            </div>
            <div className="better">
              <h4>Better</h4>
              <span>
                No more human errors. Our floor plans will always take into
                account regulatory restrictions.
              </span>
            </div>
            <div>
              <span className="line"></span>
            </div>
            <div>
              <h4>Personalized</h4>
              <span>
                Generate floor plans according to your specific needs and
                requirements
              </span>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default About;
