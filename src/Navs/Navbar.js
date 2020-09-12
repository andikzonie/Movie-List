import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import Link from "@material-ui/core/Link";
import { useStyles } from "./UseStyles";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { NavContext } from "../Context/NavContext";
import { AuthContext } from "../Context/AuthContext";

const Navbar = (props) => {
  const classes = useStyles();
  const { open, setOpen } = useContext(NavContext);
  const { user, setUser } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openProfileIcon = Boolean(anchorEl);

  const handleProfileIcon = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseProfileIcon = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    props.history.push("/profile");
    handleCloseProfileIcon();
  };



  const handleLogOut = () => {
    localStorage.clear("user");
    setUser(null);
    handleCloseProfileIcon();
  };

  const home = () => {
    props.history.push("/");
  };

  

  const Login = () => {
    props.history.push("/login");
  };

  const SignUp = () => {
    props.history.push("/signup");
  };

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <Grid container spacing={1} justify="space-between" alignItems="center">
          <Grid item>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <Link
                  component="button"
                  variant="h6"
                  underline="none"
                  color="inherit"
                  onClick={home}
                >
                  Movie List
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
           <Grid container spacing={1} alignItems="center">
              <Grid item>
                    <Button color="default" onClick={Login}>
                      Login
                    </Button>
              </Grid>
              <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={SignUp}
                    >
                      Sign Up
                    </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Navbar);
