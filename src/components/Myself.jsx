import about from "../images/about.png";
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
                <p style={{ textAlign: "justify" }}>
                  Hello, I am
                  <span className="text-warning"> Mayur Kanade, </span>
                  Junior Developer from{" "}
                  <span className="text-warning"> Mumbai, India.</span>
                  <br />
                  <br />I am 30 years old self taught dev with good
                  understanding of
                  <span className="blue">
                    {" "}
                    React framework, Node Js, Python &amp; Django framework{" "}
                  </span>
                  with interest in web and software development. Started my
                  career as a desktop engineer then in to application support
                  and now from last one year working as a junior web developer.
                  <br />
                  <br />
                  My field of Interest's are building new Web App and Products
                  and also in areas related to Blockchain and Natural Launguage
                  Processing. Whenever possible, I also apply my knowledge for
                  Scrapping Website, Automating regular tasks and try to learn
                  new Frameworks like <span className="blue"> Next.js</span>
                  <br />
                  <br />
                  Apart from coding, i love exploring different places and go
                  for hikes, till now i have done 4 Himalayan, 30+ Sahyadri
                  treks &amp; travelled across India which
                  eventually helped me with communication, better time management,
                  teamwork and interaction with a diverse group of people. I am
                  huge fan of Sachin Tendulakr, Liverpool FC, Ferrari &amp;
                  Roger Federer. Some other activities that I love to do!!
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
        <div className="col-md-12">Mayur</div>
      </div>
    </div>
  );
};
export default Myself;
