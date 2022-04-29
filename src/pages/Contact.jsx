import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Heading, Socialicons } from "../components";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-inner">
      <div className="dark">
        <div className="container pb-5">
          <Heading
            title="Contact Me"
            subTitle="Feel free to reach out if you have any questions, think we could work together, or just want to connect ✌️"
          />
          <div className="column-card">
            <div className="card contact-card">
              <div className="card-body mb-2">
                <div className="brand-logo"></div>
                <form id="contact-form" ref={form} onSubmit={sendEmail}>
                  <div className="controls">
                    <div className="form-group">
                      <input
                        type="text"
                        name="from_name"
                        className="form-control"
                        placeholder="Your Name"
                        required="required"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="from_email"
                        className="form-control"
                        placeholder="xyz@test.com"
                        required="required"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control"
                        placeholder="Please be nice ;)"
                        rows="4"
                        required="required"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      value="Send"
                    >
                      SEND MESSAGE
                    </button>
                  </div>
                </form>
              </div>
              <Socialicons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
