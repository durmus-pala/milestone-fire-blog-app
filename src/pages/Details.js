import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useParams } from "react-router-dom";
import { useFetch } from "../helpers/Firebase";

const Details = () => {
  const { id } = useParams();
  const { blogList, isLoading } = useFetch();

  function getOneBlog(id) {
    const result = blogList?.filter((item) => item.id === id);
    return result;
  }

  console.log(getOneBlog(id));

  return (
    <div>
      {{isLoading ? (
        <img src={loading} alt="loading" />
      )}
      <Card>
        <CardHeader title="Shrimp and Chorizo Paella" />
        <CardMedia image="" title="post image" />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Details;
