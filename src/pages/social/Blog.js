import { v4 } from "uuid";
import { motion } from "framer-motion";
import { useState } from "react";

import "./Blog.css";

const Blog = ({ src, caption, fileType }) => {

  const [likeAmount, setLikeAmount] = useState(0);
  const [isOnClick, setIsOnClick] = useState(false);
  function clickHeart() {
    setLikeAmount(likeAmount + 1);
    setIsOnClick(true);
  }
  function clickHeartAgain() {
    setLikeAmount(likeAmount - 1);
    setIsOnClick(false);
  }

  return (
    <div className="blog-index">
      <div key={v4()}>
        {fileType.startsWith("video") ? (
          <video
            src={src}
            controls
            alt="post-video"
            className="blog-index-img"
          />
        ) : (
          <img src={src} alt="" className="blog-index-img" />
        )}
        <div className="blog-index-text-border">
          <div className="blog-index-caption">{caption}</div>
        </div>
        <div className="blog-index-icon-border">
          <div className="blog-index-icon">
            <motion.div
              className="blog-heart-amount"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOnClick ? (
                <i onClick={clickHeartAgain} className="fas fa-heart icon heart-afterClick" />
              ) : (
                <i onClick={clickHeart} className="far fa-heart icon" />
              )}
              <div>{likeAmount} Like</div>
            </motion.div>
            <motion.i
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="fas fa-share-alt icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
