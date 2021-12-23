import { useState } from "react";
import { motion } from "framer-motion";

import "./Swap.css";

const Swap = () => {
  const [amount, setAmount] = useState("");
  function amountChange(e) {
    setAmount(e.target.value * 0.8);
  }

  return (
    <div className="swap-index">
      <motion.form
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="swap-form-index"
      >
        <label className="swap-item">
          <div className="swap-input">
            <div>ETH</div>
            <input
              type="text"
              placeholder="0.0"
              className="swap-inputarea"
              onChange={amountChange}
            />
          </div>
        </label>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="input-change"
        >
          <i className="fas fa-sync-alt change-loge" />
        </motion.div>
        <label className="swap-item">
          <div className="swap-input">
            <div>USDT</div>
            <input
              type="text"
              value={amount}
              placeholder="0.0"
              className="swap-inputarea"
            />
          </div>
        </label>
        <div className="swap-submit">
          <motion.input
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            value="SWAP"
            className="swap-submit-btn"
          />
        </div>
      </motion.form>
    </div>
  );
};
export default Swap;
