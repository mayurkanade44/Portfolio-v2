import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Heading, Socialicons } from "../components";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

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
          if (result.text === "OK") {
            toast.success("Thank You");
            setValues({ name: "", email: "", message: "" });
          }
        },
        (error) => {
          toast.error("There was some problem. Try again later");
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
                        value={values.name}
                        onChange={(e) =>
                          setValues({ ...values, name: e.target.value })
                        }
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="from_email"
                        className="form-control"
                        placeholder="xyz@test.com"
                        required="required"
                        value={values.email}
                        onChange={(e) =>
                          setValues({ ...values, email: e.target.value })
                        }
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control"
                        placeholder="Please be nice ;)"
                        rows="4"
                        required="required"
                        value={values.message}
                        onChange={(e) =>
                          setValues({ ...values, message: e.target.value })
                        }
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
