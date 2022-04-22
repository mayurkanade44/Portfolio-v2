import homeLogo from "../images/home-main.svg";
import { Particle, Typewriter } from "../components";

const Home = () => {
  return (
    <section>
      <div className="container-fluid home-section" id="home">
        <Particle />
        <div className="container home-content">
          <div className="row">
            <div className="col-md-7 home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello World!!
                <img
                  src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif"
                  style={{ width: 64, paddingLeft: 10, paddingBottom:20 }}
                  alt="Waving Hand"
                />
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Mayur Kanade</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Typewriter />
              </div>
            </div>

            <div className="col-md-5" style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
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
