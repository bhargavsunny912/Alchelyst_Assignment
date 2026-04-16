/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import Table from "../Resuable/Table";
import TableFooter from "../Resuable/TableFooter";
import StatusTag from "../Resuable/Status";

const Events = ({ data }) => {
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
    <Table title={data.title} icon={data.icon} iconColor={data.iconColor} count={data.count}>
      <div className="activity-table-wrap">
        <table className="activity-table">
          <thead>
            <tr>
              <th style={{ width: "15%" }}>ID</th>
              <th style={{ width: "30%" }}>Fund</th>
              <th style={{ width: "20%" }}>Type</th>
              <th style={{ width: "20%" }}>Value date</th>
              <th style={{ width: "15%" }}>Status</th>
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
                <td>{row.id}</td>
                <td>{row.fund}</td>
                <td>{row.type}</td>
                <td>{row.valueDate}</td>
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

export default Events;