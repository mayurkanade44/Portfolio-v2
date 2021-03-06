import git from "../images/github2.png";
import internet from "../images/internet.png";

const ProjectCard = ({ img, title, description, website, github }) => {
  return (
    <div className="projects-card">
      <img
        src={img}
        className="card-img-top"
        alt="project-img"
        style={{ height: 200 }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
      <div className="projects-modal">
        <div className="">
          <div className="row my-2">
            <div className="col-7">
              <h5 className="card-title">{title}</h5>
            </div>
            <div className="col-2">
              <a href={website} target="_blank" rel="noreferrer">
                <img src={internet} alt="internet" style={{ height: 35 }} />
              </a>
            </div>
            <div className="col-2">
              <a href={github} target="_blank" rel="noreferrer">
                <img src={git} alt="github" style={{ height: 30 }} />
              </a>
            </div>
            
          </div>
          <p className="card-text text-info my-3">{description}</p>
          {title === "Portfolio" && (
            <p className="card-text text-info">
              Previous version of
              <a
                style={{ textDecoration: "none", color: "yellow" }}
                href="https://mayur-kanade-v1.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Portfolio{" "}
              </a>
              made with HTML, Bootstrap-4, &amp; JS.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
