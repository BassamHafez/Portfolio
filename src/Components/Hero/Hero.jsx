import profilePic from "../../assets/me.jpg";
import MainBtn from "../UI/Buttons/MainBtn";
const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse mb-12">
        <img
          src={profilePic}
          className="w-3/4 sm:max-w-sm shadow-lg shadow-cyan-400 border-2 border-cyan-400 rounded-2xl"
        />
        <div className="md:px-10 mt-5 sm:mt-0">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2">
            {"Hi I'm"} <span className="text-cyan-400">Bassam Hafez</span>
          </h1>
          <span className="text-gray-400">Frontend Developer | React Js</span>
          <p className="py-6">
            I specialize in building responsive, user-friendly web applications
            using modern technologies like React.js. With a passion for clean
            design and seamless user experience.
          </p>
          <MainBtn text="Download CV" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
