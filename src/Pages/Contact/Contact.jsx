import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainTitle from "../../Components/UI/Blocks/MainTitle";
import ContactForm from "./ContactForm";
import {
  faCaretDown,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Contact = () => {
  const contactLinks = [
    { _id: "linke_1", url: "https://wa.me/201124090094", icon: faWhatsapp },
    { _id: "linke_2", url: "https://github.com/BassamHafez", icon: faGithub },
    {
      _id: "linke_3",
      url: "https://www.linkedin.com/in/bassam-hafez/",
      icon: faLinkedin,
    },
    {
      _id: "linke_4",
      url: "https://www.facebook.com/bassam.elostoora",
      icon: faFacebook,
    },
  ];

  return (
    <section className="p-5 min-h-screen">
      <MainTitle text="Get In Touch" />
      <div className="flex flex-col-reverse flex-wrap md:flex-row justify-center mt-15">
        <div className="basis-1/2 flex flex-col items-center">
          <div>
            <div className="text-center mb-5 ">
              <h4 className="text-2xl font-medium">Contact Me</h4>
              <FontAwesomeIcon className="text-cyan-400" icon={faCaretDown} />
            </div>
            <ul className="mb-10">
              <li className="flex items-center break-all mb-5">
                <FontAwesomeIcon
                  className="text-cyan-400 me-2 bg-cyan-400/20 p-2 rounded-full"
                  icon={faEnvelope}
                />
                bassamhafez790@gmail.com
              </li>
              <li className="flex items-center mb-5 break-all">
                <FontAwesomeIcon
                  className="text-cyan-400 me-2 bg-cyan-400/20 p-2 rounded-full"
                  icon={faPhone}
                />
                +201124090094 <br /> +201554100777
              </li>
              <li className="flex items-center mb-4 break-all">
                <FontAwesomeIcon
                  className="text-cyan-400 me-2 bg-cyan-400/20 p-2 rounded-full"
                  icon={faLocationDot}
                />
                62 El-Wehda Street (Giza,Egypt)
              </li>
            </ul>
          </div>
          <div className="divider"></div>
          <div>
            <div className="flex gap-8 flex-wrap">
              {contactLinks.map((link) => (
                <Link to={link.url} target="_blank" key={link._id}>
                  <FontAwesomeIcon
                    className=" dark:text-gray-400 hover:text-cyan-400 hover:scale-110 duration-300 rounded-full text-4xl"
                    icon={link.icon}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="divider md:hidden"></div>
        <div className="basis-1/2 flex flex-col items-center justify-center">
          <div className="text-center mb-5 ">
            <h4 className="text-2xl font-medium">Send Message</h4>
            <FontAwesomeIcon className="text-cyan-400" icon={faCaretDown} />
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
