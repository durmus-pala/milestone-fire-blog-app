import { Button, TextField } from "@material-ui/core";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import React, { useState } from "react";
import { updateHandler } from "../helpers/Firebase";
import { useHistory } from "react-router-dom";

const UpdateBlog = (props) => {
  const detailedPost = props.location.blog;

  const [title, setTitle] = useState(detailedPost[0]?.info?.title);
  const [imageUrl, setImageUrl] = useState(detailedPost[0]?.info?.url);
  const [content, setContent] = useState(detailedPost[0]?.info?.content);
  const history = useHistory();

  const handleUpdateInfo = (post) => {
    const updatedPost = post;
    updatedPost.info.title = title;
    updatedPost.info.url = imageUrl;
    updatedPost.info.content = content;
    updateHandler(updatedPost);
    history.push("/");
  };
  return (
    <div className="blog-container">
      <div className="login">
        <form noValidate autoComplete="off">
          <br></br>
          <TextField
            className="login-email"
            type="text"
            id="outlined-basic"
            variant="outlined"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <br />
          <TextField
            className="login-password"
            type="text"
            id="outlined-basic"
            variant="outlined"
            placeholder="image Url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <br />
          <br />
          <TextareaAutosize
            className="content"
            rows={10}
            rowsMax={10}
            aria-label="maximum height"
            placeholder="Enter Your Content Here"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </form>
        <br />
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleUpdateInfo(detailedPost[0])}
        >
          Update Content
        </Button>
      </div>
    </div>
  );
};

export default UpdateBlog;
