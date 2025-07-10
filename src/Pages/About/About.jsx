import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainTitle from "../../Components/UI/Blocks/MainTitle";
import AboutTimeline from "../../Components/UI/Blocks/AboutTimeline";
import { mySkills } from "../../logic/sharedData";
import { useEffect } from "react";
import AOS from "aos";

const About = () => {
  useEffect(() => {
    AOS.init({ disable: "mobile" });
  }, []);

  return (
    <main className="min-h-screen p-10">
      <section>
        <div className="flex flex-wrap xl:flex-nowrap gap-12">
          <div data-aos="zoom-in-right" data-aos-duration="800" className="z-20">
            <MainTitle text="Education" classes="mb-2 mx-2" />
            <AboutTimeline label="first" />
          </div>

          <div data-aos="zoom-in-left" data-aos-duration="800" className="z-10">
            <MainTitle text="Experience" classes="mb-2 mx-2" />
            <AboutTimeline />
          </div>
        </div>
      </section>

      <section>
        <MainTitle text="My Skills" />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 justify-items-center">
          {mySkills.map((skill) => (
            <div
              key={skill._id}
              className="w-full xs:w-auto"
              data-aos="zoom-in-up"
              data-aos-duration="800"
            >
              <div
                className={`group hover:-translate-y-2 shadow-md dark:shadow-cyan-100 duration-300 bg-base-300 cursor-pointer h-40 w-full xs:w-55 rounded-4xl flex flex-col items-center justify-evenly text-6xl ${skill.color}`}
              >
                {skill.isImg ? (
                  <img
                    className="w-16 object-contain group-hover:scale-120 duration-300"
                    src={skill.src}
                    alt={skill.name}
                  />
                ) : skill.isSvg ? (
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
