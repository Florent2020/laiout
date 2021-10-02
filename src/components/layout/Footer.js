import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <span className="footer-line"></span>
          <div>
            <i className="fab fa-linkedin-in"></i>
          </div>
          <div className="all-rights">
            <span>All Rights Reserved.</span>
          </div>
          <div className="all-rights">
            <span>© by laiout. An Antler portfolio company</span>
          </div>
          {/* <div className="small-footer">
            <span>Location</span>
            <span>Email</span>
          </div>
          <div className="small-footer">
            <span>Oslo, Norway</span>
            <span>info@laiout.co</span>
          </div> */}
        </div>

        <Row>
          <Col sm={12} md={3}>
            <h5 className="bolder">Location</h5>
            <h5 className="lighter">Oslo, Norway</h5>
          </Col>
          <Col sm={12} md={6}></Col>
          <Col sm={12} md={3}>
            <h5 className="bolder">Email</h5>
            <h5 className="lighter">info@laiout.co</h5>
          </Col>
        </Row>

        {/* <Row>
          <Col sm={12} md={3} className="lighter">
            Oslo, Norway
          </Col>
          <Col sm={12} md={6}></Col>
          <Col sm={12} md={3} className="lighter">

          </Col>
        </Row> */}
      </div>
    </footer>
  );
}

export default Footer;
