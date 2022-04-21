import git from "../images/github2.png";
import internet from "../images/internet.png";

const ProjectCard = ({ img, title, description, website, github }) => {
  return (
    <div className="card-flip">
      <div className="flip">
        <div className="project-card-view">
          <img
            src={img}
            className="card-img-top"
            alt="..."
            style={{ height: 200 }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
          </div>
        </div>
        <div className="back">
          <div className="card">
            <div className="card-body">
              <div className="row m-3">
                <div className="col-md-8">
                  <h5 className="card-title">{title}</h5>
                </div>
                <div className="col-md-2">
                  <a
                    href={website}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={internet} alt="internet" style={{ height: 35 }} />
                  </a>
                </div>
                <div className="col-md-2">
                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={git} alt="github" style={{ height: 30 }} />
                  </a>
                </div>
              </div>
              <p className="card-text text-info mb-5">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
