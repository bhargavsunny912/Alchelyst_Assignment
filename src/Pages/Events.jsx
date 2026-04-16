import data from "../Data/mockData.json";
import Topbar from "../Components/Layouts/TopBar";
import EventsTable from "../Components/Capital_Events/Events";

const Events = () => {
  return (
    <>
      <Topbar navTabs={data.navTabs} user={data.meta.user} date={data.meta.date} />
      <main className="activity-main">
        <EventsTable data={data.capitalEvents} />
      </main>
    </>
  );
}

export default Events;