import profile from "../images/profile.jpg";
import arrow from "../images/arrow.png";
import { Heading } from ".";

const Myself = () => {
  return (
    <div className="container about-section">
      <Heading
        title="About Me"
        subTitle="Little bit about my 30 years rotation to sun"
      />
      <div className="row justify-content-center py-1">
        <div className="col-md-6 py-1">
          <div className="card quote-card-view">
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p style={{ textAlign: "justify", marginBottom: 0 }}>
                  Hello, I am
                  <span className="text-warning"> Mayur Kanade, </span>
                  Junior Developer from{" "}
                  <span className="text-warning"> Mumbai, India.</span>
                  <br />
                  <br />I am 30 years old self taught dev with good
                  understanding of
                  <span className="blue">
                    {" "}
                    React framework, Node Js, &amp; Python,{" "}
                  </span>
                  with interest in web and software development. Started my
                  career as a desktop engineer then moved in to application
                  support and now from last one year working as a junior web
                  developer.
                  <br />
                  <br />
                  My field of Interest's are building new
                  <span className="blue"> Web App and Products </span>
                  and also in areas related to{" "}
                  <span className="blue">
                    Blockchain and Natural Launguage Processing.
                  </span>{" "}
                  Whenever possible, I also apply my knowledge for Scrapping
                  Website, Automating regular tasks and learning new tech like{" "}
                  <span className="blue"> Next.js &amp; Solidity.</span>
                  <br />
                  <br />
                  Apart from coding, some other activities that I love to do!!
                </p>
                <ul className="my-3">
                  <li className="about-activity">
                    <img src={arrow} alt="right arrow" style={{ height: 25 }} />
                    <span className="ps-3 text-warning">
                      Trekking &amp; Travelling
                    </span>
                  </li>
                  <li className="about-activity">
                    <img src={arrow} alt="right arrow" style={{ height: 25 }} />
                    <span className="ps-3 text-warning">Sports</span>
                  </li>
                </ul>
                <p>
                  I love exploring different places and go for hikes, till now i
                  have done{" "}
                  <span className="blue">
                    {" "}
                    4 Himalayan &amp; 30+ Sahyadri treks.
                  </span>{" "}
                  I have travelled across India which eventually helped me with
                  communication, better time management, teamwork and
                  interacting with a diverse group of people. I am huge fan of
                  Sachin Tendulakr, Liverpool FC, Ferrari &amp; Roger Federer.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
        <div
          className="col-md-5 about-img text-center"
          style={{ paddingTop: "40px", paddingBottom: "30px" }}
        >
          <img
            src={profile}
            alt="about"
            className="img-fluid profile-img"
            
          />
        </div>
      </div>
    </div>
  );
};
export default Myself;
