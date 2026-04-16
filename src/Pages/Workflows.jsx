import data from "../Data/mockData.json";
import Topbar from "../Components/Layouts/TopBar";
import NavWorkflows from "../Components/WorkFlows/NavWorkflows";
import OtherWorkflows from "../Components/WorkFlows/otherWorkflows";
import Modal from "../Components/Resuable/Modal";
import useModal from "../Hooks/useModal";

const Workflows = () => {
  const { modal, openModal, closeModal } = useModal();

  return (
    <>
      <Topbar navTabs={data.navTabs} user={data.meta.user} date={data.meta.date} />
      <main className="activity-main">
        <NavWorkflows data={data.navWorkflows} onRowClick={openModal} />
        <OtherWorkflows data={data.otherWorkflows} />
      </main>

      {modal && <Modal data={modal} onClose={closeModal} />}
    </>
  );
}

export default Workflows;