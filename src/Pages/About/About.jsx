import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainTitle from "../../Components/UI/Blocks/MainTitle";
import {
  faBootstrap,
  faCss3Alt,
  faGitAlt,
  faGithub,
  faHtml5,
  faJava,
  faReact,
  faSass,
  faSquareJs,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import AboutTimeline from "../../Components/UI/Blocks/AboutTimeline";

const About = () => {
  const reduxLogo = (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      role="img"
      viewBox="0 0 24 24"
      className="techIcon redux"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061a1.71 1.71 0 00-1.648 1.769c.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.005 4.795-1.603.838-3.296 1.154-4.944.93-1.378-.195-2.456-.81-3.116-1.799-.988-1.499-1.078-3.116-.255-4.734.6-1.17 1.499-2.023 2.099-2.443a9.96 9.96 0 01-.42-1.543C-.868 14.408-.416 18.752.932 20.805c1.004 1.498 3.057 2.456 5.304 2.456.6 0 1.23-.044 1.843-.194 3.897-.749 6.848-3.086 8.541-6.532zm5.348-3.746c-2.32-2.728-5.738-4.226-9.634-4.226h-.51c-.253-.554-.837-.899-1.498-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074a1.69 1.69 0 001.499-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.005 2.622 2.323 3.237 3.897.538 1.288.509 2.547-.045 3.597-.855 1.647-2.294 2.517-4.196 2.517-1.199 0-2.367-.375-2.967-.644-.36.298-.96.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.094-1.647 5.919-3.236.898-1.798.824-4.824-1.47-7.416zM6.49 17.042c.03.899.793 1.648 1.708 1.648h.06a1.688 1.688 0 001.648-1.768c0-.9-.779-1.647-1.693-1.647h-.06c-.06 0-.15 0-.226.029-1.243-2.098-1.768-4.347-1.572-6.772.12-1.828.72-3.417 1.797-4.735.9-1.124 2.593-1.68 3.747-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.45C17.741 3.197 14.686.62 11.764.62 9.02.62 6.49 2.613 5.47 5.535 4.077 9.43 4.991 13.177 6.7 16.174c-.15.195-.24.539-.21.868z"></path>
    </svg>
  );

  const tailwindLogo = (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      role="img"
      viewBox="0 0 24 24"
      className="techIcon tailwind"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
    </svg>
  );

  const postmanLogo = (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      role="img"
      viewBox="0 0 24 24"
      className="techIcon postman"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zM18.855 6.05a.143.143 0 0 0-.053.157.416.416 0 0 1-.053.45.14.14 0 0 0 .023.197.141.141 0 0 0 .084.03.14.14 0 0 0 .106-.05.691.691 0 0 0 .087-.751.138.138 0 0 0-.194-.033z"></path>
    </svg>
  );

  const mySkills = [
    { _id: "skill_1", name: "React", icon: faReact, color: "text-cyan-500" },
    {
      _id: "skill_2",
      name: "JavaScript",
      icon: faSquareJs,
      color: "text-yellow-400",
    },
    {
      _id: "skill_3",
      name: "Redux Toolkit",
      icon: reduxLogo,
      isSvg: true,
      color: "text-purple-600",
    },
    {
      _id: "skill_4",
      name: "Bootstrap",
      icon: faBootstrap,
      color: "text-indigo-600",
    },
    {
      _id: "skill_5",
      name: "Tailwind",
      icon: tailwindLogo,
      isSvg: true,
      color: "text-sky-400",
    },
    {
      _id: "skill_6",
      name: "Sass",
      icon: faSass,
      color: "text-pink-500",
    },
    {
      _id: "skill_7",
      name: "Css",
      icon: faCss3Alt,
      color: "text-blue-500",
    },
    {
      _id: "skill_8",
      name: "Html",
      icon: faHtml5,
      color: "text-orange-500",
    },
    {
      _id: "skill_9",
      name: "Git",
      icon: faGitAlt,
      color: "text-orange-600",
    },
    {
      _id: "skill_10",
      name: "Github",
      icon: faGithub,
      color: "text-black",
    },
    {
      _id: "skill_11",
      name: "Postman",
      icon: postmanLogo,
      isSvg: true,
      color: "text-orange-400",
    },
    {
      _id: "skill_12",
      name: "React Native",
      icon: faReact,
      color: "text-cyan-500",
    },
    {
      _id: "skill_13",
      name: "wordPress",
      icon: faWordpress,
      color: "text-blue-800",
    },
    {
      _id: "skill_14",
      name: "Java",
      icon: faJava,
      color: "text-red-700",
    },
  ];

  return (
    <main className="min-h-screen p-10">
      <section>
        <div className="flex flex-wrap xl:flex-nowrap ">
          <div>
            <MainTitle text="Education" classes="mb-2 mx-2" />
            <AboutTimeline label="first" />
          </div>
          <div>
            <MainTitle text="Experience"  classes="mb-2 mx-2"/>
            <AboutTimeline />
          </div>
        </div>
      </section>
      <section>
        <MainTitle text="My Skills" />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 justify-items-center">
          {mySkills.map((skill) => (
            <div key={skill._id} className="w-full xs:w-auto">
              <div
                className={`group hover:-translate-y-2 shadow-md dark:shadow-cyan-100 duration-300 bg-base-300 cursor-pointer h-40 w-full xs:w-55 rounded-4xl flex flex-col items-center justify-evenly text-6xl ${skill.color}`}
              >
                {skill.isSvg ? (
                  <div className="group-hover:scale-120 duration-300">
                    {skill.icon}
                  </div>
                ) : (
                  <FontAwesomeIcon
                    className="group-hover:scale-120 duration-300"
                    icon={skill.icon}
                  />
                )}
                <span className="text-lg text-black dark:text-white">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
