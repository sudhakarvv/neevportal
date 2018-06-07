import React from "react";
import { List, ListItem, withStyles } from "material-ui";

import footerStyle from "assets/jss/material-dashboard-react/footerStyle";

function Footer({ ...props }) {
  const { classes } = props;
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          
        </div>
        <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
            <a href="http://www.google.com" className={classes.a}>
             Neev Systems
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
export default withStyles(footerStyle)(Footer);
