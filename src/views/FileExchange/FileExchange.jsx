import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";


import { withStyles, Grid, Card,
  CardContent,
  CardHeader,
  Typography,
  Tabs,
  Tab,Button,IconButton,Table, TableHead, TableRow,TableCell, TableBody } from "material-ui";
  import {
    ContentCopy,
    Store,
    InfoOutline,
    Warning,
    DateRange,
    LocalOffer,
    Update,
    ArrowUpward,
    AccessTime,
    Accessibility,
    AttachFile,
    CloudDownload,
    InsertDriveFile
  } from "@material-ui/icons";

import {
  StatsCard,
  ChartCard,
  TasksCard,
  RegularCard,
  ItemGrid,Tasks
} from "components";
import { bugs, website, server } from "variables/general";
import dashboardStyle from "assets/jss/material-dashboard-react/dashboardStyle";

class FileExchange extends React.Component {
  constructor(props){
    super(props);
    this.state={
      files:[{filename:'test.png', size:'100kb',createdon:'01-01-2018'}
    ,{filename:'test2.png', size:'100kb',createdon:'01-01-2018'},
    {filename:'test3.png', size:'100kb',createdon:'01-01-2018'}
    ,{filename:'test4.png', size:'100kb',createdon:'01-01-2018'},
    {filename:'test5.png', size:'100kb',createdon:'01-01-2018'}
    ]
    }
  }
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container>
      <ItemGrid xs={12} sm={12} md={12}>
      <Card className={classes.card}>
      <CardHeader
          classes={{
            root: classes.cardHeader,
            title: classes.cardTitle,
            content: classes.cardHeaderContent
          }}
          title="File Exchange"
          action={
            <div>
              <IconButton onClick={(e) => this.myInput.click() }>
              <AttachFile />
              <input id="myInput" type="file" ref={(ref) => this.myInput = ref} style={{ display: 'none' }} />            
              </IconButton>             
            </div>
          } />
          <CardContent>
         {
           <Table>
             <TableHead>
             <TableRow>
                <TableCell>File</TableCell>
                <TableCell >Size</TableCell>
                <TableCell >Created On</TableCell>
                <TableCell ></TableCell>
          </TableRow>
             </TableHead>
             <TableBody>
             {this.state.files.map(function(n,key) {
            return (
              <TableRow key={key}>
                <TableCell component="th" scope="row">
                <InsertDriveFile /> {n.filename}
                </TableCell>
                <TableCell >{n.size}</TableCell>
                <TableCell >{n.createdon}</TableCell>
                <TableCell>
                <IconButton>
                  <CloudDownload />
              </IconButton>
                </TableCell>
              </TableRow>
            );
          })}

             </TableBody>
          </Table>
         }
        </CardContent>
        </Card>
      </ItemGrid>
      </Grid>
      
       
      </div>
    );
  }
}
export default withStyles(dashboardStyle)(FileExchange);