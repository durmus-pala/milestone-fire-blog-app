import React, { useContext } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import placeholder from "../assets/placeholder.png";
import loading from "../assets/loading.gif";
import { useFetch } from "../helpers/Firebase";
import { AuthContext } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

const Post = () => {
  const { blogList, isLoading } = useFetch();
  const currentUser = useContext(AuthContext);
  const history = useHistory();

  const changeColor = (e) => {
    if (e.target.style.color === "red") {
      e.target.style.color = "gray";
    } else {
      e.target.style.color = "red";
    }
  };

  const handleDetail = (id) => {
    if (!currentUser?.currentUser?.uid) {
      alert("Please Login To See Details!!!");
    } else {
      history.push({
        pathname: `/details/${id}`,
      });
    }
  };
  return (
    <div>
      {isLoading ? (
        <img src={loading} alt="loading" />
      ) : (
        blogList?.map((item, id) => (
          <Card
            key={id}
            style={{
              width: "20%",
              height: "20rem",
              display: "inline-block",
              marginRight: "5%",
              marginBottom: "5%",
              overflowY: "auto",
            }}
            onDoubleClick={() => handleDetail(item.id)}
          >
            <CardHeader title={item.info.title} />
            <CardMedia
              component="img"
              image={item.info.url || placeholder}
              title="Post image"
              style={{ width: "100%" }}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.info.content}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites" onClick={changeColor}>
                <FavoriteIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))
      )}
    </div>
  );
};

export default Post;
