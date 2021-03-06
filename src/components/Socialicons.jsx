import twitter from "../images/twitter.png";
import github from "../images/github.png";
import insta from "../images/instagram.png";
import linkedin from "../images/linkedin.png";

const Socialicons = () => {
  return (
    <div className="row d-flex justify-content-around">
      <div className="col-1 social-icons">
        <a
          href="https://github.com/mayurkanade44"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="github" id="github" />
        </a>
      </div>
      <div className="col-1 social-icons">
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          <img src={linkedin} alt="linkedin" id="linkedin" />
        </a>
      </div>
      <div className="col-1 social-icons">
        <a
          href="https://twitter.com/redkopmayur"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="twitter" id="twitter" />
        </a>
      </div>

      <div className="col-1 social-icons me-1">
        <a
          href="https://www.instagram.com/the_red_kop/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={insta} alt="insta" id="insta" />
        </a>
      </div>
    </div>
  );
};
export default Socialicons;
