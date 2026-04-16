/* eslint-disable react-hooks/set-state-in-effect */
import Table from "../Resuable/Table";
import TableFooter from "../Resuable/TableFooter";
import ProgressBar from "../Resuable/ProgressBar";
import StatusPoint from "../Resuable/StatusPoint";
import { useState, useEffect } from "react";

const NavWorkflows = ({ data, onRowClick }) => {
  const [page, setPage] = useState(1);
  const perPage = 5;

  useEffect(() => {
    setPage(1);
  }, [data.rows]);

  const startIndex = (page - 1) * perPage;
  const endIndex = page * perPage;
  const rows = data.rows.slice(startIndex, endIndex);
  const start = startIndex + 1;
  const end = endIndex > data.rows.length ? data.rows.length : endIndex;

  return (
    <Table title={data.title} icon={data.icon} iconColor={data.iconColor} count={data.count} className="activity-col-full"

      actions={
        <div className="activity-actions">
          <button className="activity-btn-secondary">Export</button>
          <button className="activity-btn-primary">+ New Workflow</button>
        </div>
      }
    >
      <div className="activity-table-wrap">
        <table className="activity-table">
          <thead>
            <tr>
              <th style={{ width: "20%" }}>Fund</th>
              <th style={{ width: "18%" }}>Workflow</th>
              <th style={{ width: "14%" }}>Value date</th>
              <th style={{ width: "18%" }}>Progress</th>
              <th style={{ width: "26%" }}>Step status</th>
              <th style={{ width: "4%" }}></th>
            </tr>
          </thead>

          <tbody>
            {rows.length === 0 && (
              <tr>
                <td colSpan="6" style={{ textAlign: "center", padding: 20 }}>No data found</td>
              </tr>
            )}

            {rows.map((row) => (
              <tr key={row.id} onClick={() => onRowClick(row.modal)} style={{ cursor: "pointer" }}>
                <td>
                  <div className="activity-fund-name">{row.fund.name}</div>
                  <div className="activity-fund-sub">{row.fund.sub}</div>
                </td>

                <td>{row.workflow}</td>
                <td>{row.valueDate}</td>

                <td><ProgressBar value={row.progress} color={row.progressColor} /></td>

                <td>
                  <div className="activity-pills">
                    {row.steps.map((s, i) => (<StatusPoint key={i} label={s.label} status={s.status} />))}
                  </div>
                </td>

                <td className="activity-row-caret">›</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <TableFooter info={`Showing ${start}–${end} of ${data.rows.length}`} totalRows={data.rows.length} page={page} setPage={setPage} />
    </Table>
  );
};

export default NavWorkflows;