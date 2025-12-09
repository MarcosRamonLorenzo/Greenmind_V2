import "./ProgressBar.css";

export const ProgressBar = ({prc}) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${prc}%` }}></div>
    </div>
  );
};
