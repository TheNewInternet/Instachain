import "./Social.css";

import Post from "./Post";
import Feed from "./Feed";
import { created } from "../../api";
// import Create from "../../api"

const init = async () => {
  created();
};
init();

const Social = () => {
  return (
    <div className="social-index">
      <div>
      <Post />
      <Feed />
      </div>
    </div>
  );
};

export default Social;
