import StatusTag from "../Resuable/Status";
import Table from "../Resuable/Table";

const OtherWorkflows = ({ data }) => (
  <Table title={data.title} icon={data.icon} iconColor={data.iconColor} count={data.count}>
    <div className="activity-table-wrap">
      <table className="activity-table">
        <thead>
          <tr>
            <th style={{ width: "30%" }}>Fund</th>
            <th style={{ width: "25%" }}>Name</th>
            <th style={{ width: "20%" }}>Value date</th>
            <th style={{ width: "25%" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.rows.map(row => (
            <tr key={row.id}>
              <td>
                <div className="activity-fund-name">{row.fund.name}</div>
                <div className="activity-fund-sub">{row.fund.sub}</div>
              </td>
              <td><span className="activity-wf-name">{row.name}</span></td>
              <td><span className="activity-val-date">{row.valueDate}</span></td>
              <td>
                <div className="activity-tag-stack">
                  {row.tags.map((tag, i) => <StatusTag key={i} status={tag.type} label={tag.label} />)}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="activity-panel-foot">
      <span className="activity-foot-info">1–{data.rows.length} of {data.rows.length}</span>
    </div>
  </Table>
);

export default OtherWorkflows;