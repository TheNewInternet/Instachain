import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./Navbar.css";

const Navbar = ({ toggle }) => {
  return (
    <>
      <nav className="navbar-item">
        <Link to="/" className="navbar-logo">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="logo"
          >
            <i className="fab fa-ethereum fa-xs" />
            Instachain
          </motion.div>
        </Link>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <i className="fas fa-bars navbar-dropbar" onClick={toggle} />
        </motion.div>
        <div className="navbar-menu">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/" className="menu-icon">
              Home
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/Social" className="menu-icon">
              Social
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="###" className="menu-icon">
              Wallet
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/About" className="menu-icon">
              About
            </Link>
          </motion.div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
