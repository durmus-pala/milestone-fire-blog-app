import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import noData from "../assets/no-data.png";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="profile Picture"
          height="400"
          image={currentUser.photoURL || noData}
          title="Profile picture"
          style={{ width: "30%", margin: "auto", marginTop: "2%" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {currentUser.displayName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {currentUser.email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
    </Card>
  );
};

export default Profile;
