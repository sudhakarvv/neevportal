import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import appStyle from "assets/jss/material-dashboard-react/appStyle.jsx";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { withStyles } from "material-ui";

class Login extends React.Component {

    render() {
        const { classes, ...rest } = this.props;
        return (
          <div className={classes.wrapper}>
          <h1>Login</h1>
          </div>  );
        }
    }
export default withStyles(appStyle)(Login);