const TableFooter = ({ page, setPage, totalRows, perPage = 5, info }) => {
  const totalPages = Math.ceil(totalRows / perPage);

  return (
    <div className="activity-panel-foot">
      <span>{info}</span>

      <div style={{ display: "flex", gap: 6 }}>
        <button disabled={page === 1} onClick={() => setPage(page - 1)} className="activity-btn">‹</button>

        {[...Array(totalPages)].map((_, i) => (
          <button key={i} onClick={() => setPage(i + 1)} className={`activity-btn ${page === i + 1 ? "active-page" : ""}`}>{i + 1}</button>
        ))}

        <button disabled={page === totalPages} onClick={() => setPage(page + 1)} className="activity-btn">›</button>
      </div>
    </div>
  );
}

export default TableFooter;