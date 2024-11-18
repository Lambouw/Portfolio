// Import Styles
import "../styles/css/customdialog.css";

// Import Dialogs
import ProjectDialog from "../dialogs/ProjectDialog";

const CustomDialog = ({ open, onClose, type, data }) => {
  if (!open) return null;

  return (
    <div className="custom-dialog-overlay" onClick={onClose}>
      <div className="custom-dialog-overlay--content" onClick={(e) => e.stopPropagation()}>
        {type === "project" && <ProjectDialog project={data} />}
      </div>
    </div>
  );
};

export default CustomDialog;
