import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Contact() {
  return (
    <div id="contact">
      <div className="contact">
        <Form>
          <h2>Keep in touch for future developments &#128640;</h2>
          <fieldset>
            <Form.Group>
              <Form.Label>
                Name <span>*</span>
              </Form.Label>
              <Form.Control />
              {/* {errors.full_name && (
              <ValidationError>{errors.full_name.message}</ValidationError>
            )} */}
            </Form.Group>

            <Form.Group>
              <Form.Label>
                Email <span>*</span>
              </Form.Label>
              <Form.Control />
              {/* {errors.email && (
              <ValidationError>{errors.email.message}</ValidationError>
            )} */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="radio"
                label="I accept the terms & conditions"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Get in contact
            </Button>
          </fieldset>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
