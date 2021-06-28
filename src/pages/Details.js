import React, { useContext } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useFetch } from "../helpers/Firebase";
import { AuthContext } from "../contexts/AuthContext";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Details = (props) => {
  const { blogList, isLoading } = useFetch();
  const currentUser = useContext(AuthContext);
  const history = useHistory();
  const blog = props.location;
  // const id = useParams();

  console.log("blog", blog);

  return (
    <div>
      <Card>
        <CardHeader title="Shrimp and Chorizo Paella" />
        <CardMedia image="/static/images/cards/paella.jpg" title="post image" />
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
