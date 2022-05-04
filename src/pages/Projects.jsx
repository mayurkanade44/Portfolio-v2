import { LangAnimation, ProjectList, Footer } from "../components";

const Projects = () => {
  return (
    <>
      <div className="project-inner">
        <div className="dark">
          <ProjectList />
          <LangAnimation />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Projects;
