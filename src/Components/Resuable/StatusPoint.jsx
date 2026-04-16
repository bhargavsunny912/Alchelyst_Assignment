const StatusPill = ({ label, status }) => {
  return (
    <span className={`activity-pill pill-${status}`}>
      <span className="activity-pill-dot" />
      {label}
    </span>
  );
}

export default StatusPill;