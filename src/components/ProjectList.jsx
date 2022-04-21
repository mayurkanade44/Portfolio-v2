import ProjectCard from "./ProjectCard";
import { projects } from "./utils";

const ProjectList = () => {
  return (
    <div className="container-fluid project-section">
      <div className="container">
        <h1 className="project-heading">
          <strong className="purple">Projects</strong>
        </h1>
        <div className="heading-underline" />
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <div className="row justify-content-around">
          {projects.map((project) => (
            <div key={project.id} className="col-md-4 pb-5">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProjectList;
