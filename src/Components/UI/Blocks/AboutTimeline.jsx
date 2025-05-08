import { faArrowAltCircleRight, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const AboutTimeline = ({label}) => {
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

  return (
    <ul className={`timeline timeline-snap-icon max-md:timeline-compact timeline-vertical ${label==="first"?"md:right-1/4 xl:right-1/2":"md:right-1/4 xl:right-1/2"}`}>
      {educationTimline.map((line, index) => (
        <li key={line._id}>
          {index === 0 ? (
            <>
              <hr />
              {aciveMiddle}
            </>
          ) : (
            middle
          )}

          <div className="timeline-end md:mb-10 bg-gray-100 shadow-3xl p-5 rounded-3xl sm:min-w-140">
            <time className="bg-cyan-500 rounded-2xl rounded-tr-none pe-10 ps-2 text-white">
              {line.year}
            </time>
            <div className="text-lg text-cyan-500 font-medium mt-4">
              {line.title}
            </div>
            {line.desc}{" "}
            {line.link && (
              <Link
                target="_blank"
                to={line.link}
                className="underline underline-offset-1 "
              >
                <FontAwesomeIcon title="show" className="hover:scale-110 duration-300 hover:text-blue-600" icon={faArrowAltCircleRight}/>
              </Link>
            )}
          </div>
         {index!==2&&<hr />} 
        </li>
      ))}
    </ul>
  );
};

export default AboutTimeline;
