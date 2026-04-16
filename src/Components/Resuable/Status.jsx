const StatusTag = ({ status, label }) => {
  const map = {
    delivered: "tag-delivered",
    initiated: "tag-initiated",
    review: "tag-review",
    pending: "tag-pending",
    client: "tag-client",
  };

  return (
    <span className={`activity-tag ${map[status]}`}>
      {label || status}
    </span>
  );
}

export default StatusTag;