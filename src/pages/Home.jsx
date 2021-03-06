import { useEffect } from "react";
import { Particle, Typewriter, Socialicons } from "../components";
import { Link } from "react-router-dom";
import about from "../images/about.png";

const Home = () => {
  useEffect(() => {
    const addTitle = () => {
      if (document.visibilityState === "visible") {
        document.title = "Mayur Kanade";
      } else {
        document.title = "Come Back To Portfolio 🙏";
      }
    };
    document.addEventListener("visibilitychange", addTitle);
  }, []);

  return (
    <div className="container-fluid home-section">
      <Particle />
      <div className="container home-content">
        <div className="row">
          <div className="col-md-7 home-header">
            <h1 className="heading">
              Hello World!!
              <img
                className="waving-hand"
                src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif"
                alt="Waving Hand"
              />
            </h1>
            <h1 className="heading-name">
              I'M
              <strong className="main-name"> Mayur Kanade</strong>
            </h1>
            <div className="typewriter">
              <Typewriter />
            </div>
            <div className="row mt-5">
              <div className="col-lg-4">
                <Link to="/contact" className="nav-link">
                  <div className="btn-quote btn-outline-dark">
                    <span>Hire Me</span>
                    <div className="dot"></div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-6 home-social">
                <Socialicons />
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <img
              src={about}
              alt="home pic"
              className="img-fluid home-avtar"
              style={{ maxHeight: "450px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
