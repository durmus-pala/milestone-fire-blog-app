import { Button, TextField } from "@material-ui/core";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import React, { useState } from "react";
import { updateHandler, useFetch } from "../helpers/Firebase";
import { useHistory, useParams } from "react-router-dom";
import spinner from "../assets/spinner.gif";

const UpdateBlog = () => {
  const { id } = useParams();
  const { blogList, isLoading } = useFetch();
  console.log(blogList);
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  const history = useHistory();

  function getOneBlog(id) {
    const result = blogList?.filter((item) => item.id === id);
    return result;
  }

  getOneBlog(id);

  const detailedPost = getOneBlog(id);
  console.log(getOneBlog(id));

  const handleUpdateInfo = (info) => {
    info = {
      title: title,
      content: content,
      url: imageUrl,
    };
    updateHandler(info);
    history.push("/");
  };
  return (
    <div>
      {isLoading ? (
        <img src={spinner} alt="loading" />
      ) : (
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
                value={detailedPost[0].info.title}
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
                value={detailedPost[0].info.url}
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
                value={detailedPost[0].info.content}
                onChange={(e) => setContent(e.target.value)}
              />
            </form>
            <br />
            <br />
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleUpdateInfo(detailedPost[0].info)}
            >
              Update Content
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateBlog;
