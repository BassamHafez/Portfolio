import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Timeline = () => {
  const middleCircle = (
    <div className="timeline-middle">
        <FontAwesomeIcon icon={faCircle} className="text-cyan-500"/>
    </div>
  );

  return (
    <ul className="timeline timeline-vertical xs:right-25">
      <li>
        <div className="timeline-start text-gray-400">Live in</div>
        {middleCircle}
        <div className="timeline-end timeline-box">Giza, Egypt</div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-start text-gray-400">Position</div>
        {middleCircle}
        <div className="timeline-end timeline-box">Entry-Level / Junior</div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-start text-gray-400">Age</div>
        {middleCircle}
        <div className="timeline-end timeline-box">24</div>
        <hr />
      </li>
    </ul>
  );
};

export default Timeline;
