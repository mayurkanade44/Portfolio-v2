import homeLogo from "../images/home-main.svg";
import { Particle, Typewriter, Socialicons } from "../components";
import { Link } from "react-router-dom";
import about from "../images/about.png";

const Home = () => {
  return (
    <section>
      <div className="container-fluid home-section">
        <Particle />
        <div className="container home-content">
          <div className="row">
            <div className="col-md-7 home-header">
              <h1 className="heading">
                Hello World!!
                <img
                  src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif"
                  style={{ width: 64, paddingLeft: 10, paddingBottom: 20 }}
                  alt="Waving Hand"
                />
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Mayur Kanade</strong>
              </h1>
              <div style={{ padding: 44, textAlign: "left" }}>
                <Typewriter />
              </div>
              <div className="row mt-5">
                <div className="col-md-4">
                  <Link to="/contact" className="nav-link">
                    <div className="btn-quote btn-outline-dark">
                      <span>Hire Me</span>
                      <div className="dot"></div>
                    </div>
                  </Link>
                </div>
                <div className="col-md-8">
                  <Socialicons />
                </div>
              </div>
            </div>
            <div className="col-md-5" style={{ paddingTop: 90 }}>
              <img
                src={about}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
