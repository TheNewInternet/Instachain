import { motion } from "framer-motion";

import "./Wallet.css";

const Wallet = () => {
  return (
    <div className="wallet-index">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="wallet-container"
      >
        <div className="wallet-user">
          <div className="wallet-user-photo"></div>
          <div className="wallet-user-name"></div>
        </div>
        <div className="wallet-user-address"></div>
        <div className="wallet-user-address"></div>
        <div className="wallet-user-profile"></div>
        <div className="wallet-user-alter">
          <div className="comingsoon">coming soon ...</div>
        </div>
      </motion.div>
    </div>
  );
};
export default Wallet;
