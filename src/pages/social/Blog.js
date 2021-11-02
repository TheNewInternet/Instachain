import { v4 } from "uuid";
import { motion } from "framer-motion";

import "./Blog.css";

const Blog = ({ src, caption, fileType }) => {
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
          <div className="blog-index-icon">
            <motion.i
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="far fa-heart icon" />
            <motion.i
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="far fa-comment icon" />
            <motion.i
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="fas fa-link icon" />
          </div>

          <div className="blog-index-caption">{caption}</div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
