import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./Sidebar.css";
import SidebarData from "./SidebarData";

const DropDown = ({ isOpen, toggle }) => {
  const ContactUs = (e) => {
    e.preventDefault();
    window.open("https://www.instagram.com/astn.0820_/");
  };

  return (
    <div
      className={isOpen ? "sidebar-index active" : "sidebar-index"}
      onClick={toggle}
    >
      <div className="sidebar-menu">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="menu-bar"
        >
          <i className="fas fa-angle-right angle-icon" onClick={toggle} />
        </motion.div>
        {SidebarData.map((item, index) => {
          return (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="sidebar-menu-items"
              key={index}
            >
              <Link to={item.path} className="menu-item-border">
                <div className="menu-icon">{item.icon}</div>
                <span className="menu-text">{item.title}</span>
              </Link>
            </motion.div>
          );
        })}
        <div className="menu-btn-border">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="menu-btn"
            onClick={ContactUs}
          >
            Contact Us
          </motion.button>
        </div>
      </div>
    </div>
  );
};
export default DropDown;
