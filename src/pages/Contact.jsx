import { Heading, Socialicons } from "../components";

const Contact = () => {
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
                <form
                  id="contact-form"
                  method="POST"
                  action=""
                  accept-charset="UTF-8"
                >
                  <div className="controls">
                    <div className="form-group">
                      <input
                        id="form_name"
                        type="text"
                        name="from_name"
                        className="form-control"
                        placeholder="Your Name"
                        required="required"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        id="form_email"
                        type="email"
                        name="from_email"
                        className="form-control"
                        placeholder="xyz@test.com"
                        required="required"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        id="form_message"
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
                      onclick="sendMail()"
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
