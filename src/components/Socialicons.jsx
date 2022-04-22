import twitter from "../images/twitter.png";
import github from "../images/github.png";
import insta from "../images/instagram.png";
import linkedin from "../images/linkedin.png";

const Socialicons = () => {
  return (
    <>
      <div className="col-md-1 m-1">
        <a
          href="https://github.com/mayurkanade44"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="" id="github" />
        </a>
      </div>
      <div className="col-md-1 m-1">
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          <img src={linkedin} alt="" id="linkedin" />
        </a>
      </div>
      <div className="col-md-1 m-1">
        <a
          href="https://twitter.com/redkopmayur"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="" id="twitter" />
        </a>
      </div>

      <div className="col-md-1 m-1">
        <a
          href="https://www.instagram.com/the_red_kop/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={insta} alt="" id="insta" />
        </a>
      </div>
    </>
  );
};
export default Socialicons;
