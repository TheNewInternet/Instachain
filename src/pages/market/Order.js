import { useState } from "react";
import { motion } from "framer-motion";
import { v4 } from "uuid";

import "./Order.css";

const Order = ({ add }) => {
  const [account, setAccount] = useState("");
  function accountChange(e) {
    setAccount(e.target.value);
  }

  const [caption, setCaption] = useState("");
  function captionChange(e) {
    setCaption(e.target.value);
  }

  const [image, setImage] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);
  const [typeFile, setTypeFile] = useState("");

  function imageChange(e) {
    if (e.target.files && e.target.files[0]) {
      setTypeFile(e.target.files[0].type);
      let reader = new FileReader();

      reader.onload = function (e) {
        setImage(e.target.result);
        setIsUploaded(true);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  }

  function addItem() {
    add(function (prevData) {
      return [
        ...prevData,
        {
          id: v4(),
          account,
          caption,
          image,
        },
      ];
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="order-index"
    >
      <div className="order-item">
        <i class="fas fa-user fa-x order-item-title" />
        <input
          className="order-item-input"
          type="text"
          value={account}
          onChange={accountChange}
        />
      </div>
      <div className="order-item">
        <i class="fas fa-pen  order-item-title" />
        <input
          className="order-item-input"
          type="text"
          value={caption}
          onChange={captionChange}
        />
      </div>
      <div className="order-item">
        <span className="order-item-title"></span>
        {!isUploaded ? (
          <div className="folder">
            <input
              id="upload-input"
              className="order-img-input"
              type="file"
              accept=".jpg,.jpeg,.gif,.png"
              onChange={imageChange}
            />
            <label htmlFor="upload-input">
              <i className="fas fa-folder-open fa-10x folder-icon"></i>
            </label>
          </div>
        ) : (
          <div className="preview">
            {typeFile.includes("video") ? (
              <video
                className="preview-img"
                src={image}
                draggable={false}
                controls
                autoPlay
                alt="uploaded-img"
              />
            ) : (
              <img
                className="preview-img"
                id="uploaded-image"
                src={image}
                draggable={false}
                alt="uploaded-img"
              />
            )}
            <i
              className="fas fa-trash-alt fa-2x preview-dlt-icon"
              onClick={() => {
                setIsUploaded(false);
                setImage(null);
              }}
            />
          </div>
        )}
      </div>

      <button onClick={addItem} className="order-btn">
        Order
      </button>
    </motion.div>
  );
};
export default Order;
