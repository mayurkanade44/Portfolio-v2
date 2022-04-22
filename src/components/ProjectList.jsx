import { ProjectCard, Heading } from ".";
import { projects } from "./utils";

const ProjectList = () => {
  return (
    <div className="container-fluid project-section">
      <div className="container">
        <Heading
          title="Projects"
          subTitle="Here are a few projects I've worked on recently."
        />
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
