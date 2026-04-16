/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import Table from "../Resuable/Table";
import StatusTag from "../Resuable/Status";
import TableFooter from "../Resuable/TableFooter";

const Reports = ({ data }) => {
  const [page, setPage] = useState(1);
  const perPage = 5;

  useEffect(() => {
    setPage(1);
  }, [data]);

  const startIndex = (page - 1) * perPage;
  const endIndex = page * perPage;
  const rows = data.rows.slice(startIndex, endIndex);
  const start = startIndex + 1;
  const end = endIndex > data.rows.length ? data.rows.length : endIndex;

  return (
    <Table title={data.title} icon={data.icon} iconColor={data.iconColor}>
      <div className="activity-table-wrap">
        <table className="activity-table">
          <thead>
            <tr>
              <th>Entity</th>
              <th>Report</th>
              <th>Group</th>
              <th>Created</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {rows.length === 0 && (
              <tr>
                <td colSpan="5" style={{ textAlign: "center", padding: 20 }}>No data found</td>
              </tr>
            )}

            {rows.map((row) => (
              <tr key={row.id}>
                <td>{row.entity}</td>
                <td>{row.report}</td>
                <td>{row.group}</td>
                <td>{row.created}</td>
                <td><StatusTag status={row.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <TableFooter info={`${start}–${end} of ${data.rows.length}`} totalRows={data.rows.length} page={page} setPage={setPage} />
    </Table>
  );
};

export default Reports;