const FilterBar = ({ activeFilter, setActiveFilter, search, setSearch }) => {

  const filters = [
    { id: "all", label: "All" },
    { id: "workflows", label: "Workflows" },
    { id: "events", label: "Events" },
    { id: "reports", label: "Reports" },
    { id: "payments", label: "Payments" },
  ];

  return (
    <div className="activity-filterbar">

      <div style={{ display: "flex", gap: 8 }}>
        {filters.map((f) => (
          <button key={f.id} className={`activity-chip ${activeFilter === f.id ? "active" : ""}`} onClick={() => setActiveFilter(f.id)}>{f.label}</button>
        ))}
      </div>

      <div className="activity-search">
        <input placeholder="Search…" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
    </div>
  );
}

export default FilterBar;