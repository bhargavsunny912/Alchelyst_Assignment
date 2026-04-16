import { NavLink } from "react-router-dom";
import Icon from "../../Utils/Icons";

const Topbar = ({ navTabs, user, date }) => {
  return (
    <header className="activity-topbar">

      <div className="activity-brand">
        <div className="activity-brand-icon"><Icon name="logo" size={18} /></div>
        <span className="activity-brand-name">PortfolioHub<span className="brand-dot">.</span></span>
      </div>

      <nav className="activity-nav">
        {navTabs?.map((tab) => (<NavLink key={tab.id} to={tab.route} className={({ isActive }) => `activity-nav-tab ${isActive ? "active" : ""}`}>{tab.label}</NavLink>))}
      </nav>

      <div className="activity-topbar-right">
        <div className="activity-date">{date}</div>

        <div className="activity-avatar">
          {user?.initials || "NA"}
        </div>
      </div>
    </header>
  );
};

export default Topbar;