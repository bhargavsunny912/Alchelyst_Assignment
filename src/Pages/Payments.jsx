import data from "../Data/mockData.json";
import Topbar from "../Components/Layouts/TopBar";
import PaymentsTable from "../Components/Payments/Payments";

const Payments = () => {
  return (
    <>
      <Topbar navTabs={data.navTabs} user={data.meta.user} date={data.meta.date} />
      <main className="activity-main">
        <PaymentsTable data={data.payments} user={data.meta.user} date={data.meta.date} />
      </main>
    </>
  );
}

export default Payments;
