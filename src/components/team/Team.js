import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Team() {
  return (
    <div className="team" id="team">
      <div className="container">
        <Row>
          <Col sm={12} md={4} className="personel">
            <img
              src={
                "https://content.app-sources.com/s/5908297055308249/uploads/Images/Chris-0913676.jpg"
              }
              alt="cristiano"
            />
            <h4>Cristiano Coretti</h4>
            <h4>CPO</h4>
            <span className="line"></span>
            <p>Architect</p>
            <p>Proptech consultancy</p>
            <p>Lecturer</p>
            <p>10+ years design experience</p>
          </Col>
          <Col sm={12} md={4} className="personel">
            <img
              src={
                "https://content.app-sources.com/s/5908297055308249/uploads/Images/wOUTER-0913677.jpg"
              }
              alt="wouter"
            />
            <h4>Wouter Merkestein</h4>
            <h4>CEO</h4>
            <span className="line"></span>
            <p>Launch manager tech unicorn</p>
            <p>€ 2B tender coordinator</p>
            <p>Various international managerial roles</p>
            <p>Published author</p>
          </Col>

          <Col sm={12} md={4} className="personel">
            <img
              src={
                "https://content.app-sources.com/s/5908297055308249/uploads/Images/Isak-6685192.jpg"
              }
              alt="isak"
            />
            <h4>Isak Buhl-Mortensen</h4>
            <h4>CTO</h4>
            <span className="line"></span>
            <p>Senior Developer</p>
            <p>PhD in Particle Physics</p>
            <p>Researcher at SINTEF</p>
            <p>10+ years programming</p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Team;
