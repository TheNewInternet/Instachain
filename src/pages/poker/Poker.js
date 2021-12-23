import { motion } from "framer-motion";

import PokerData from "./PokerData";
import "./Poker.css";

const Poker = () => {
  return (
    <div className="poker-index">
      {PokerData.map((item, index) => {
        return (
          <motion.div
            initial={{ opacity: 0 ,rotateY: 0}}
            animate={{ opacity: 1 , rotateY: 360}}
            transition={{ duration: 1 }}
            className="poker-container"
          >
            <div className="poker-face" key={index}>
              <div className="poker-number">{item.title}</div>
              <div className="poker-icon">{item.icon}</div>
              {/* <div className="poker-number-down">{item.title}</div> */}
            </div>
            <div className="poker-back">
              <div className="poker-back-step">
                <div className="poker-back-steptitle">{item.steptitle}</div>
                <div className="poker-back-stepdetail">{item.stepdetail}</div>
                <div className="poker-back-icon">{item.backicon}</div>
              </div>
            </div>
          </motion.div>
        );
      })}

      <motion.div
       initial={{ opacity: 0 ,rotateY: 0}}
       animate={{ opacity: 1 , rotateY: 360}}
       transition={{ duration: 1 }}
        className="poker-enter"
      >
        <motion.input 
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.95 }}

        type="button" value="POKER APP" className="poker-enter-btn" />
      </motion.div>
    </div>
  );
};
export default Poker;
