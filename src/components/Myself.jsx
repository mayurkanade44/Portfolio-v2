import about from "../images/about.png";
import arrow from "../images/arrow.png";

const Myself = () => {
  return (
    <div className="container about-section">
      <div className="row justify-content-center pb-1">
        <div className="col-md-6 py-1">
          <h1
            className="text-center"
            style={{ fontSize: "2.1em", paddingBottom: "20px" }}
          >
            Know Who <strong className="purple">I'M</strong>
          </h1>
          <div className="card quote-card-view">
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p style={{ textAlign: "justify" }}>
                  Hello, I am
                  <span className="text-warning"> Mayur Kanade, </span>
                  Junior Developer from{" "}
                  <span className="text-warning"> Mumbai, India.</span>
                  <br />
                  <br />
                  I am 30 years old and interested in web and software
                  development. Started my career as a desktop engineer then in
                  to application support and now from last one year working as a
                  junior web developer. It has been almost 6 months since I
                  started learning React and Python, and now seeking to work in
                  a creative environment.
                  <br />
                  <br />
                  Apart from coding, some other activities that I love to do!!
                </p>
                <ul>
                  <li className="about-activity">
                    <img src={arrow} alt="right arrow" style={{ height: 25 }} />
                    <span className="ps-3">Trekking &amp; Travelling</span>
                  </li>
                  <li className="about-activity">
                    <img src={arrow} alt="right arrow" style={{ height: 25 }} />
                    <span className="ps-3">Sports</span>
                  </li>
                </ul>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
        <div
          className="col-md-5 about-img"
          style={{ paddingTop: "40px", paddingBottom: "30px" }}
        >
          <img src={about} alt="about" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};
export default Myself;
