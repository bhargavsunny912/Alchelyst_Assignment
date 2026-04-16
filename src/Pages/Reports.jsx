import data from "../Data/mockData.json";
import Topbar from "../Components/Layouts/TopBar";
import ReportsTable from "../Components/Reports/Reports";

const Reports = () => {
  return (
    <>
      <Topbar navTabs={data.navTabs} user={data.meta.user} date={data.meta.date} />
      <main className="activity-main">
        <ReportsTable data={data.reports} />
      </main>
    </>
  );
}

export default Reports;
