import "./Feed.css";
import Post from "./Post";
import { v4 } from "uuid";

import { getPosts, updateAccount } from "../../api";

function Blog(props) {
  const content = props.posts.map((post) => (
    // <div className="blog-index-item">{post.fileType}</div>
    <div className="blog-index">
      <div>{post.owner}</div>
      <div key={v4()}>
        {post.fileType.startsWith("video") ? (
          <video
            src={post.src}
            controls
            alt="post-video"
            className="blog-index-img"
          />
        ) : (
          <img src={post.src} alt="" className="blog-index-img" />
        )}
        <div className="blog-index-img-border">
          <div className="blog-index-item">{post.caption}</div>
        </div>
      </div>
    </div>
  ));
  return <div>{content}</div>;
}

let posts = [];

const getList = async () => {
  posts = await getPosts();
};
getList();

const Feed = () => {
  return (
    <div className="feed-index">
      <Blog posts={posts} />
    </div>
  );
};

export default Feed;
