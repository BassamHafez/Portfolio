import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profilePic from "../../assets/me.webp";
import Timeline from "../UI/Blocks/Timeline";
import MainBtn from "../UI/Buttons/MainBtn";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse mb-20">
        <div className="w-3/4 xs:w-full flex justify-center">
          <div className="border-8 border-cyan-500 w-fit rounded-2xl">
            <img
              src={profilePic}
              className="xs:w-xs md:max-w-sm translate-8 hover:translate-0 duration-500 rounded-2xl shadow-lg shadow-cyan-500"
            />
          </div>
        </div>

        <div className="md:px-10 mt-10 lg:mt-0">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2">
            {"Hi I'm"} <span className="text-cyan-500">Bassam Hafez</span>
          </h1>
          <span className="text-gray-400">Frontend Developer | React Js</span>
          <p className="py-6">
            I specialize in building responsive, user-friendly web applications
            using modern technologies like React.js. With a passion for clean
            design and seamless user experience.
          </p>
          <div className="flex justify-start mb-8">
            <Timeline />
          </div>

          <div className="flex gap-x-5 items-center">
            <a
              title="Download CV"
              href="/Bassam_ReactJS.pdf"
              download="Bassam_ReactJS.pdf"
            >
              <MainBtn text="Download CV" />
            </a>
            <Link to="https://github.com/BassamHafez" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                className="dark:text-white text-3xl hover:scale-110 duration-300 cursor-pointer"
              />
            </Link>
            <Link
              to="https://www.linkedin.com/in/bassam-hafez/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="dark:text-white text-3xl hover:scale-110 duration-300 cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
