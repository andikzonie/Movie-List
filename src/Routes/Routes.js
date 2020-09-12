import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useStyles } from "../Navs/UseStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "../Navs/Navbar";
import Sidebar from "../Navs/Sidebar";
import Footer from "../Navs/Footer";
import Login from "../Auth/Login";
import Movies from "../Movies/Movies";
import DetailMovies from "../Movies/DetailMovies";
import { AuthContext } from "../Context/AuthContext";

const Routes = () => {
    const classes = useStyles();
    
    const { user } = useContext(AuthContext);
  
    const PrivateRoute = ({ user, ...props }) => {
      if (user) {
        return <Route {...props} />;
      } else {
        return <Redirect to="/login" />;
      }
    };
  
    const LoginRoute = ({ user, ...props }) => {
      if (user) {
        return <Redirect to="/" />;
      } else {
        return <Route {...props} />;
      }
    };
  
    return (
      <>
        <div className={classes.root}>
          <CssBaseline />
          <Navbar />
          {user && <Sidebar />}
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
              <Route exact path="/" component={Movies} />
              
              <Route path="/movie-list/:id?" component={DetailMovies} />
             
              <LoginRoute path="/login" user={user} component={Login} />
              
            </Switch>
          </main>
        </div>
        <Footer />
      </>
    );
  };
  
  export default Routes;
  