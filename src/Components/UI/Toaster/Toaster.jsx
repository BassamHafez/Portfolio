import {
  faCheckSquare,
  faXmarkSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Toaster = ({ toast }) => {
  return (
    <div className="toast toast-start shadow-sm dark:shadow-cyan-400 rounded-lg">
      <div className={`alert bg-base-100`}>
        <FontAwesomeIcon
          icon={toast.type === "error" ? faXmarkSquare : faCheckSquare}
          className={`${
            toast.type === "error" ? "text-error" : "text-success"
          } fa-2x`}
        />{" "}
        <span>{toast.message}</span>
      </div>
    </div>
  );
};

export default Toaster;
