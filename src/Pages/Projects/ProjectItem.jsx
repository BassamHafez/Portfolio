import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowUpRightFromSquare,
  faVideoCamera,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";

const ProjectItem = ({ project }) => {
  const iconClasses =
    "mx-2 hover:scale-110 hover:text-cyan-400 duration-300 cursor-pointer";

  useEffect(() => {
    AOS.init({ disable: "mobile" });
  }, []);

  return (
    <div
      key={project._id}
      className="flex flex-col-reverse xl:flex-row justify-around items-center my-10 p-4 md:p-6 gap-4 bg-base-300 rounded-4xl shadow-lg dark:shadow-cyan-400"
      data-aos="zoom-in" data-aos-duration="800"
    >
      <div className="basis-1/2">
        <h2 className="text-2xl font-bold mb-4 text-cyan-400">
          {project.name}
        </h2>
        <p className="text-sm dark:text-gray-200 pl-3">{project.desc}</p>
        <h3 className="text-xl mt-5 mb-2 text-cyan-400 font-bold">Features</h3>
        <ul className="list-outside list-none features_list pl-3">
          {project.features.map((feature, index) => (
            <li
              className="text-sm mb-2 dark:text-gray-200 relative pl-6"
              key={`${feature}_${index}`}
            >
              {feature}
            </li>
          ))}
        </ul>
        {project.note && (
          <div role="alert" className="alert mt-2">
            {/* <FontAwesomeIcon className="text-red-600 fa-fade" icon={faThumbTack}/> */}
            <span className="loading loading-ring loading-lg text-red-600"></span>
            <span>{project.note}</span>
          </div>
        )}
      </div>
      <div className="flex-col justify-center items-center basis-1/2">
        <div className="text-2xl mb-1 px-2 flex justify-end text-gray-400">
          <div className="tooltip">
            <div className="tooltip-content">
              <div className="animate-bounce text-cyan-400 -rotate-10 text-md font-black">
                Github
              </div>
            </div>
            <Link to={project.github} target="_blank">
              <FontAwesomeIcon
                title="Github"
                className={iconClasses}
                icon={faGithub}
              />
            </Link>
          </div>
          <div className="tooltip">
            <div className="tooltip-content">
              <div className="animate-bounce text-cyan-400 -rotate-10 text-md font-black">
                Live Demo
              </div>
            </div>
            <Link to={project.live} target="_blank">
              <FontAwesomeIcon
                title="Live"
                className={iconClasses}
                icon={faEye}
              />
            </Link>
          </div>
          <div className="tooltip">
            <div className="tooltip-content">
              <div className="animate-bounce text-cyan-400 -rotate-10 text-md font-black">
                Video
              </div>
            </div>
            <Link to={project.videoUrl} target="_blank">
              <FontAwesomeIcon
                title="Video"
                className={iconClasses}
                icon={faVideoCamera}
              />
            </Link>
          </div>
        </div>
        <div className="group border-1 border-transparent hover:border-cyan-200 overflow-hidden w-full max-w-4xl rounded-2xl relative m-auto">
          <div className="bg-black/90 opacity-0 group-hover:opacity-100 flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 rounded-2xl z-10 duration-500">
            <Link to={project.live} target="_blank">
              <FontAwesomeIcon
                title="Live"
                className="text-4xl cursor-pointer hover:scale-120 duration-200 hover:text-cyan-400"
                icon={faArrowUpRightFromSquare}
              />
            </Link>
          </div>
          <img
            className="w-full rounded-2xl group-hover:scale-105 duration-800 cursor-pointer"
            src={project.imgUrl}
            alt={project.name}
          />
        </div>

        <div className="flex">
          <ul className="flex justify-center xs:justify-start items-center mt-2 gap-y-2 gap-x-4 flex-wrap">
            {project.tools.map((tool, index) => (
              <li
                key={index}
                className="text-center text-sm border-2 border-cyan-400 py-2 px-5 rounded-2xl hover:bg-cyan-400 hover:scale-110 duration-300"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
