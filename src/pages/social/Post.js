import { useState } from "react";

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
    console.log(caption)
    captureCaption(caption)
  }
  function fileChange(e) {
    // setFile(e.target.files[0]);
    // console.log(typeof file)
    // console.log(file.type)
    captureFile(e.target.files[0])
    
  }


  function handleSubmit(e) {
    e.preventDefault();
    handleOk();
  }

  const [isOnClick, setIsOnClick] = useState(false);
  function Click() {
    setIsOnClick(true);
  }

  function BackToIcon(){
    setIsOnClick(false);
  }
  
    return (
      <div>
       {isOnClick ? (
      <form onSubmit={handleSubmit} className="post-index">
        <i className="fas fa-times" onClick={BackToIcon}/>
        <label className="post-item">
          <i className="fas fa-pen post-item-title" />
          <textarea
            id="caption"
            name="caption"
            className="post-textarea"
            onChange={captionChange}
          />
        </label>
        <label className="post-item">
          <div className="folder">
            <input
              type="file"
              id="upload-input"
              accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
              //className="post-img-input"
              onChange={fileChange}
            />
            <label htmlFor="upload-input">
              <i className="fas fa-folder-open fa-10x folder-icon"></i>
            </label>
          </div>
        </label>
        <input type="submit" value="Submit" className="post-submit-btn" />
      </form>):(
        <i className="far fa-edit" onClick={Click}/>
      )}
      </div>
    );
  }

export default Post;
