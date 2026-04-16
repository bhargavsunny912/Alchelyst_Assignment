import { useEffect, useState } from "react";

const Modal = ({ data, onClose }) => {
  const [tab, setTab] = useState("Overview");
  const tabs = ["Overview", "Capital Balance", "Reconciliation", "NAV Pack"];

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose() };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  const stepIcon = (status) => {
    if (status === "done") return { cls: "ico-done", char: "✓" };
    if (status === "warn") return { cls: "ico-warn", char: "!" };
    return { cls: "ico-gray", char: "–" };
  };

  const amtClass = (v) => {
    if (typeof v === "string" && v.startsWith("+")) return "amt-pos";
    if (typeof v === "string" && v.startsWith("-")) return "amt-neg";
    return "amt-neu";
  };

  return (
    <div className="activity-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="activity-modal">
        <div className="activity-modal-hd">
          <div>
            <div className="activity-modal-title">{data.title}</div>
            <div className="activity-modal-sub">{data.subtitle}</div>
          </div>
          <button className="activity-modal-close" onClick={onClose}>×</button>
        </div>

        <div className="activity-modal-tabs">
          {tabs.map(t => (
            <button key={t} className={`activity-mtab ${t === tab ? "active" : ""}`} onClick={() => setTab(t)}>{t}</button>
          ))}
        </div>

        <div className="activity-modal-body">
          {tab === "Overview" && (
            <>
              <div className="activity-kpi-row">
                {data.kpis.map((k, i) => (
                  <div key={i} className="activity-kpi-card">
                    <div className="activity-kpi-label">{k.label}</div>
                    <div className={`activity-kpi-val${k.warn ? "warn" : ""}`}>{k.value}</div>
                    <div className="activity-kpi-sub">{k.sub}</div>
                  </div>
                ))}
              </div>

              <div className="activity-sec-label">Workflow steps</div>
              <div className="activity-wf-grid">
                {data.workflowSteps.map((step, i) => {
                  const { cls, char } = stepIcon(step.status);
                  const statusLabels = { done: "Completed", warn: "Awaiting client", gray: "Not started" };
                  return (
                    <div key={i} className="activity-wf-step">
                      <div className={`activity-wf-ico ${cls}`}>{char}</div>
                      <div>
                        <div className="activity-wf-step-name">{step.name}</div>
                        <div className={`activity-wf-step-status${step.status === "warn" ? "warn" : ""}`}>
                          {statusLabels[step.status] || step.status}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="activity-sec-label">Investor capital tracking</div>
              <div className="activity-table-wrap">
                <table className="activity-table activity-inv-table">
                  <thead>
                    <tr>
                      <th>Investor</th>
                      <th>Opening bal.</th>
                      <th>Subscriptions</th>
                      <th>Redemptions</th>
                      <th>P&amp;L alloc.</th>
                      <th>Fees</th>
                      <th>Closing bal.</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.investors.map((inv, i) => (
                      <tr key={i}>
                        <td>{inv.name}</td>
                        <td className={`activity-amt ${amtClass(inv.opening)}`}>{inv.opening}</td>
                        <td className={`activity-amt ${amtClass(inv.subscriptions)}`}>{inv.subscriptions}</td>
                        <td className={`activity-amt ${amtClass(inv.redemptions)}`}>{inv.redemptions}</td>
                        <td className={`activity-amt ${amtClass(inv.pnl)}`}>{inv.pnl}</td>
                        <td className={`activity-amt ${amtClass(inv.fees)}`}>{inv.fees}</td>
                        <td className="activity-amt" style={{ fontWeight: 700 }}>{inv.closing}</td>
                        <td><span className="activity-inv-badge">{inv.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
          {tab !== "Overview" && (
            <div style={{ textAlign: "center", padding: "48px 0", color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: 13 }}>{tab} data coming soon</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;