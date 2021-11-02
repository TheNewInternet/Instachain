import "./Feed.css";

import { motion } from "framer-motion";

import Blog from "./Blog";
import { getPosts } from "../../api";

let posts = [];

const getList = async () => {
  posts = await getPosts();
};
getList();

const Feed = () => {
  return posts.map((post) => {
    const { src, caption, fileType } = post;
    return (
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="feed-index"
      >
        <Blog src={src} caption={caption} fileType={fileType} />
      </motion.div>
    );
  });
};

export default Feed;
