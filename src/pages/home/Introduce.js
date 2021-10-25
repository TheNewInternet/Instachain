import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Eth from "../picture/eth.gif";
import "./Introduce.css";

const Introduce = () => {
  return (
    <div className="introduce-border">
      <div className="introduce-index-left">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="introduce-index-h1"
        >
          Send Unlimited Post
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className="introduce-index-p"
        >
          Not afraid of crashes, not afraid of being deleted, record important
          information, Here.
        </motion.p>
        <Link to="/Market">
          <motion.button
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="introduce-btn"
          >
            Get Started
          </motion.button>
        </Link>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className="introduce-index-right"
      >
        <img src={Eth} alt="eth" className="eth-img" />
      </motion.div>
    </div>
  );
};
export default Introduce;
