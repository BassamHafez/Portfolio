import { projects } from "../../logic/sharedData";
import ProjectItem from "./ProjectItem";

const featuredProjects = projects.filter((p) => p.type.includes("featured"));
const freelanceProjects = projects.filter((p) => p.type.includes("freelance"));
const fullstackProjects = projects.filter((p) => p.type.includes("fullstack"));
const reactProjects = projects.filter((p) => p.type.includes("react"));
const jsProjects = projects.filter((p) => p.type.includes("js"));
const bootstrapProjects = projects.filter((p) => p.type.includes("bootstrap"));

const Projects = () => {
  return (
    <main className="py-4 px-2 md:p-x-10">
      <div className="tabs tabs-box">
        <label className="tab">
          <input type="radio" name="my_projects" defaultChecked />
          ALL
        </label>
        <div className="tab-content bg-base-100 p-2 md:p-6">
          {projects.map((project) => (
            <ProjectItem key={project._id} project={project} />
          ))}
        </div>

        <label className="tab">
          <input type="radio" name="my_projects" />
          Featured
        </label>
        <div className="tab-content bg-base-100 p-2 md:p-6">
          {featuredProjects.map((project) => (
            <ProjectItem key={project._id} project={project} />
          ))}
        </div>

        <label className="tab">
          <input type="radio" name="my_projects" />
          Freelance
        </label>
        <div className="tab-content bg-base-100 p-2 md:p-6">
          {freelanceProjects.map((project) => (
            <ProjectItem key={project._id} project={project} />
          ))}
        </div>

        <label className="tab">
          <input type="radio" name="my_projects" />
          Fullstack Projects
        </label>
        <div className="tab-content bg-base-100 p-2 md:p-6">
          {fullstackProjects.map((project) => (
            <ProjectItem key={project._id} project={project} />
          ))}
        </div>

        <label className="tab">
          <input type="radio" name="my_projects" />
          React with APIs
        </label>
        <div className="tab-content bg-base-100 p-2 md:p-6">
          {reactProjects.map((project) => (
            <ProjectItem key={project._id} project={project} />
          ))}
        </div>

        <label className="tab">
          <input type="radio" name="my_projects" />
           JQuery & JS
        </label>
        <div className="tab-content bg-base-100 p-2 md:p-6">
          {jsProjects.map((project) => (
            <ProjectItem key={project._id} project={project} />
          ))}
        </div>

        <label className="tab">
          <input type="radio" name="my_projects" />
          HTML & Css
        </label>
        <div className="tab-content bg-base-100 p-2 md:p-6">
          {bootstrapProjects.map((project) => (
            <ProjectItem key={project._id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
