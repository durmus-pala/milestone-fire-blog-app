import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { SignOut } from "../helpers/Firebase";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const MenuAppBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const currentUser = useContext(AuthContext);
  const history = useHistory();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    SignOut(history);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <i>
              WELCOME TO PALA'S PALACE - {currentUser?.currentUser?.displayName}
            </i>
          </Typography>
          {
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              {currentUser?.currentUser?.displayName ? (
                <Button onClick={handleLogout} style={{ color: "white" }}>
                  Logout
                </Button>
              ) : (
                ""
              )}
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                {currentUser?.currentUser?.displayName ? (
                  <div>
                    <Link to="/profile">
                      <MenuItem onClick={handleClose}>Profile</MenuItem>
                    </Link>
                    <Link to="/upload">
                      <MenuItem onClick={handleClose}>new Post</MenuItem>
                    </Link>
                  </div>
                ) : (
                  <div>
                    <Link to="/login">
                      <MenuItem onClick={handleClose}>Login</MenuItem>
                    </Link>
                    <Link to="/register">
                      <MenuItem onClick={handleClose}>Register</MenuItem>
                    </Link>
                  </div>
                )}
              </Menu>
            </div>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MenuAppBar;
