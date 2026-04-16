import { useState, useEffect } from "react";
import data from "../Data/mockData.json";
import Topbar from "../Components/Layouts/TopBar";
import FilterBar from "../Components/Layouts/FilterBar";
import NavWorkflows from "../Components/WorkFlows/NavWorkflows";
import OtherWorkflows from "../Components/WorkFlows/OtherWorkflows";
import Events from "../Components/Capital_Events/Events";
import Reports from "../Components/Reports/Reports";
import Payments from "../Components/Payments/Payments";
import Modal from "../Components/Resuable/Modal";
import useModal from "../Hooks/useModal";

export default function Home() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const { modal, openModal, closeModal } = useModal();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);
    return () => clearTimeout(timer);
  }, [search]);

  const searchInObject = (obj, search) => {
    if (!search) return true;
    return JSON.stringify(obj).toLowerCase().includes(search.toLowerCase());
  };

  const filteredNav = {
    ...data.navWorkflows,
    rows: data.navWorkflows.rows.filter((row) => searchInObject(row, debouncedSearch)),
  };

  const filteredOther = {
    ...data.otherWorkflows,
    rows: data.otherWorkflows.rows.filter((row) => searchInObject(row, debouncedSearch)),
  };

  const filteredEvents = {
    ...data.capitalEvents,
    rows: data.capitalEvents.rows.filter((row) => searchInObject(row, debouncedSearch)),
  };

  const filteredReports = {
    ...data.reports,
    rows: data.reports.rows.filter((row) => searchInObject(row, debouncedSearch)),
  };

  const filteredPayments = {
    ...data.payments,
    rows: data.payments.rows.filter((row) => searchInObject(row, debouncedSearch)),
  };

  const [activeFilter, setActiveFilter] = useState("all");

  const show = (section) => activeFilter === "all" || activeFilter === section;

  return (
    <>
      <Topbar navTabs={data.navTabs} user={data.meta.user} date={data.meta.date} />

      <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} search={search} setSearch={setSearch} />

      <main className="activity-main">

        {show("workflows") && <NavWorkflows data={filteredNav} onRowClick={openModal} />}

        {show("workflows") && <OtherWorkflows data={filteredOther} />}

        {show("events") && <Events data={filteredEvents} />}

        {show("reports") && <Reports data={filteredReports} />}

        {show("payments") && <Payments data={filteredPayments} />}

      </main>

      {modal && <Modal data={modal} onClose={closeModal} />}
    </>
  );
}