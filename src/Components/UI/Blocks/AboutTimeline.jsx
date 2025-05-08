import {
  faArrowAltCircleRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

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

  const educationTimline = [
    {
      _id: "line_1",
      year: "2020",
      title: "Route Academy",
      subTitle: "Academind by Nadia Taha & Ahmed Bahnasy",
      desc: "completed the Frontend with React track course at Route Academy in 2020",
      isActive: true,
    },
    {
      _id: "line_2",
      year: "2023",
      title: "Graduation",
      subTitle: "Academind by maximilian schwarzmüller",
      desc: "I graduated from Al-Azhar University, Faculty of Engineering, Department of Systems and Computers, with a total grade of Very Good and an Excellent grade for my graduation project.",
    },
    {
      _id: "line_3",
      year: "2023",
      title: "React - The Complete Guide (incl. Next.js, Redux)",
      subTitle: "Academind by maximilian schwarzmüller",
      desc: "completed the React - The Complete Guide (incl. Next.js, Redux) course at Udemy",
      link: "https://www.udemy.com/certificate/UC-757abf88-222a-4e5a-ae61-e24fdb6ffc79/",
    },
  ];

  const experianceTimline = [
    {
      _id: "ex_line_1",
      year: "2023",
      title: "EasyJob (Graduation Project) ",
      subTitle:
        "Platform that connecting job seekers, employers, and freelancers",
      desc: "Led a team of developers and managed the full project lifecycle, Used React.js for frontend and collaborated with backend developers (Node.js + MySQL), Received an Excellent mark and high praise from faculty",
    },
    {
      _id: "ex_line_2",
      year: "2023 - Present",
      title: "Frontend Developer — Freelance",
      subTitle:
        "Delivered web applications for clients through platforms like (Mostaql and Upwork)",
      desc: "Collaborated with backend teams using Node.js and PHP with MongoDB and MySQL., Developed and launched multiple real-world projects",
      isActive: true,
    },
  ];

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
                  <li className="list-outside list-disc" key={index}>{text}</li>
                ))}
              </ul>

              {line.link && (
                <Link
                  target="_blank"
                  to={line.link}
                  className="underline underline-offset-1 "
                >
                  <FontAwesomeIcon
                    title="show"
                    className="hover:scale-110 duration-300 hover:text-blue-600"
                    icon={faArrowAltCircleRight}
                  />
                </Link>
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
