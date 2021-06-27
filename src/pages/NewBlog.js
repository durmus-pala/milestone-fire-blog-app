import { Button, TextField } from "@material-ui/core";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import React, { useState } from "react";
import { addInfo } from "../helpers/Firebase";
import { useHistory } from "react-router-dom";
import { info } from "autoprefixer";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  const history = useHistory();

  const handleAddInfo = (e) => {
    const info = {
      title: title,
      content: content,
      url: imageUrl,
    };
    addInfo(info);
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
            onChange={(e) => setContent(e.target.value)}
          />
        </form>
        <br />
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => handleAddInfo(info)}
        >
          Add Content
        </Button>
      </div>
    </div>
  );
};

export default NewBlog;
