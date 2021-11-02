import { useState } from "react";
import { motion } from "framer-motion";

import "./Post.css";
import {
  captureCaption,
  captureFile,
  captureFileType,
  handleOk,
} from "../../api";

const Post = () => {
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState(undefined);

  function captionChange(e) {
    setCaption(e.target.value);
    console.log(caption);
    captureCaption(caption);
  }
  function fileChange(e) {
    captureFile(e.target.files[0]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleOk();
  }

  const [isOnClick, setIsOnClick] = useState(false);
  function Click() {
    setIsOnClick(true);
  }

  function BackToIcon() {
    setIsOnClick(false);
  }

  return (
    <div>
      {isOnClick ? (
        <motion.form
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          onSubmit={handleSubmit}
          className="post-index"
        >
          <div className="post-btn-border">
            <motion.input
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.95 }}
              type="button"
              value="Close"
              className="post-close-btn"
              onClick={BackToIcon}
            />
            <motion.input
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.95 }}
              type="submit" value="Submit" className="post-submit-btn" />
          </div>
          <label className="post-item">
            <motion.div
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.95 }}
              className="folder-border">
              <div className="folder">
                <input
                  type="file"
                  id="upload-input"
                  accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                  //className="post-img-input"
                  onChange={fileChange}
                />
                <label htmlFor="upload-input">
                  <i //className="fas fa-folder-plus fa-10x folder-icon" 
                  />
                </label>
              </div>
            </motion.div>
          </label>
          <label className="post-item">
            <i className="fas fa-pen post-pen-icon" />
            <textarea
              id="caption"
              name="caption"
              className="post-textarea"
              onChange={captionChange}
            />
          </label>
        </motion.form>
      ) : (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="plus-icon-border"
            onClick={Click}
          >
            <i className="fas fa-plus" />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Post;
