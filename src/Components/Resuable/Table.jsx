const Table = ({ title, count, actions, children, className = "" }) => {
  return (
    <div className={`activity-card ${className}`}>
      <div className="activity-panel-head">
        <div className="activity-panel-title">
          {title} {count && <span>({count})</span>}
        </div>
        {actions && <div className="activity-panel-actions">{actions}</div>}
      </div>
      {children}
    </div>
  );
}

export default Table;