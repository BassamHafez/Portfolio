import { Link } from "react-router-dom";
import { faArrowRight, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { educationTimline, experianceTimline } from "../../../logic/sharedData";

const AboutTimeline = ({ label }) => {
  const middle = (
    <div className="timeline-middle">
      <FontAwesomeIcon icon={faCircle} className="text-gray-400" />
    </div>
  );
  const aciveMiddle = (
    <div className="timeline-middle">
      <FontAwesomeIcon icon={faCircle} className="text-cyan-500" />
    </div>
  );

  return (
    <ul
      className={`timeline timeline-snap-icon max-md:timeline-compact timeline-vertical ${
        label === "first"
          ? "md:right-1/4 xl:right-1/2"
          : "md:right-1/4 xl:right-1/2"
      }`}
    >
      {(label === "first" ? educationTimline : experianceTimline).map(
        (line, index) => (
          <li key={line._id}>
            {index === 0 && <hr />}
            {line.isActive ? aciveMiddle : middle}

            <div className="timeline-end md:mb-10 bg-gray-100 dark:bg-base-300 shadow-3xl p-5 rounded-3xl sm:min-w-140">
              <time className="bg-cyan-500 rounded-2xl rounded-tr-none pe-10 ps-2 text-white">
                {line.year}
              </time>
              <div className="text-lg text-cyan-500 font-medium mt-4">
                {line.title}
              </div>
              <span className="text-xs text-gray-400">{line.subTitle}</span>
              <ul className="ps-6 mt-4">
                {line.desc.split(",").map((text, index) => (
                  <li className="list-outside list-disc" key={index}>
                    {text}
                  </li>
                ))}
              </ul>

              {line.link && (
                <div className="text-end mt-2">
                  <Link
                    target="_blank"
                    to={line.link}
                    className="underline underline-offset-1"
                  >
                    <FontAwesomeIcon
                      title="show"
                      className="hover:translate-x-1 hover:bg-cyan-400 duration-300 border-2 border-cyan-400 hover:border-base rounded-full p-2"
                      icon={faArrowRight}
                    />
                  </Link>
                </div>
              )}
            </div>
            {index !== 2 && <hr />}
          </li>
        )
      )}
    </ul>
  );
};

export default AboutTimeline;
