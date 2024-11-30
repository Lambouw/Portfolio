import { useEffect } from 'react';

// Import Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// Import Styles
import "../styles/css/dialog.css";

// Import Dialogs
import Project from "../dialogs/Project";

const Dialog = ({ open, onClose, type, data }) => {
  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [open]);

  if (!open) return null;

  return (
    <div className="dialog-backdrop" onClick={onClose}>
      <div className="dialog--container" onClick={(e) => e.stopPropagation()}>
        <div className="dialog--container--close-btn" onClick={onClose}>
          <FontAwesomeIcon
            className="dialog--container--close-btn--icon"
            icon={faXmark}
            size="lg"
          />
        </div>
        <div
          className="dialog--container--content"
          onClick={(e) => e.stopPropagation()}
        >
          {type === "project" && <Project project={data} />}
        </div>
      </div>
    </div>
  );
};

export default Dialog;
