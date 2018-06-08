import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { withStyles } from "material-ui";

import appStyle from "assets/jss/material-dashboard-react/appStyle.jsx";
import { Grid } from "material-ui";

import { RegularCard, Table, ItemGrid,
    Button,
    CustomInput, } from "components";

class Login extends React.Component {
    constructor(props){
        super(props);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onSubmit(){
        this.props.history.push('/home');
    }
   
    render() {
        const { classes, ...rest } = this.props;
        return (
          <div className={classes.wrapper}>
          <div className={classes.content}>
          <div className={classes.container}>
          <Grid container>
             <ItemGrid xs={4} sm={4} md={4}>
             <RegularCard
          cardTitle="Login"
          cardSubtitle=""
          content={
            <div>
                <Grid container>
                  
                  <ItemGrid xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="Username"
                      id="txt-username"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                 
                </Grid>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="Password"
                      id="txt-password"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                  
                </Grid>
                
                
              </div>
          }
          footer={<Button onClick={this.onSubmit} color="primary">Login</Button>}
        />
             </ItemGrid>
             </Grid>
          </div></div>
          </div>  );
        }
    }
export default withStyles(appStyle)(Login);