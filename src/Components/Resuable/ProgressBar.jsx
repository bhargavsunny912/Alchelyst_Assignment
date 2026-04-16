const ProgressBar = ({ value, color }) => {
  return (
    <div className="activity-prog-wrap">
      <div className="activity-prog-bar">
        <div className={`activity-prog-fill prog-${color}`} style={{ width: `${value}%` }} />
      </div>
      <span>{value}%</span>
    </div>
  );
}

export default ProgressBar;