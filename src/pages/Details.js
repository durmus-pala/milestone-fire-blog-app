import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { useParams, useHistory } from "react-router-dom";
import { useFetch, deleteHandler } from "../helpers/Firebase";
import spinner from "../assets/spinner.gif";
import placeholder from "../assets/placeholder.png";

const Details = () => {
  const { id } = useParams();
  const { blogList, isLoading } = useFetch();
  const history = useHistory();

  const getOneBlog = (id) => {
    const result = blogList?.filter((item) => item.id === id);
    return result;
  };

  const detailedPost = getOneBlog(id);

  const handleDelete = (id) => {
    deleteHandler(id);
    history.push("/");
  };

  const handleUpdate = (id) => {
    history.push({
      pathname: `/edit/${id}`,
      blog: detailedPost,
    });
  };

  return (
    <div>
      {isLoading ? (
        <img src={spinner} alt="loading" />
      ) : (
        <Card>
          <CardHeader title={detailedPost[0]?.info.title} />
          <CardMedia
            component="img"
            image={detailedPost[0]?.info.url || placeholder}
            title="Post image"
            style={{ width: "20%", margin: "auto" }}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {detailedPost[0]?.info.content}
            </Typography>
          </CardContent>

          <div style={{ marginBottom: "1%" }}>
            <Button
              onClick={() => handleDelete(detailedPost[0].id)}
              variant="contained"
              color="secondary"
              style={{ marginRight: "5%" }}
            >
              DELETE
            </Button>
            <Button
              onClick={() => handleUpdate(detailedPost[0].id)}
              variant="contained"
              color="primary"
            >
              UPDATE
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};

export default Details;
