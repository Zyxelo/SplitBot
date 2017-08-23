/**
 * Copyright 2017-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable react/react-in-jsx-scope */

/* =============================================
 =                   Setup                   =
 ============================================= */

/* ----------  External Libraries  ---------- */

import React from 'react';

/* ----------  External UI Kit  ---------- */

import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';




import userApi from '../messenger-api-helpers/user'


/* ----------  Internal Components  ---------- */

import WebviewControls from '../messenger-api-helpers/webview-controls';
import {dateString} from '../utils/date-string-format';

/* ----------  Models  ---------- */


/* =============================================
 =            React Application              =
 ============================================= */

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 0,
  },
  paper: {
    width: '100%',
    overflowX: 'auto',
  },
};



let id = 0;
function createData(name, amount, people) {
  id += 1;
  return { id, name, amount, people};
}

const data = [
  createData('Victor', 159, 'All'),
  createData('Leslie', 237, 'All'),
  createData('Frederika', 400,'All'),
  createData('Annika', 305, 'Victor, Frederika'),
  createData('Carl', 356, 'All'),
];






export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'test',
      tid: "demo",
      imgUrl: "https://www.w3schools.com/w3css/img_avatar3.png",
      value: 0
    };
  }


  componentWillMount() {
    if (this.props.userId !== 'demo') {
      userApi.getDetails(this.props.userId.psid ,(err, {statusCode}, body) => {
        console.log(body);
        this.setState(
          {name: body.first_name + body.last_name,
            tid: this.props.userId.tid,
            imgUrl: body.profile_pic
          }
        );
      });
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };



  /*
   * Provide the main structure of the resulting HTML
   * Delegates items out to specialized components
   *
   */
  render() {
    /**
     * If waiting for data, just show the loading spinner
     * and skip the rest of this function
     */


    /* ----------  Main Structure  ---------- */

    return (
      <div className='app' style={styles.container}>

        <AppBar position="static" color="primary" >
          <Toolbar space-between>
            <Avatar alt="Remy Sharp" key={this.props.psid} src={this.state.imgUrl} />
            <Typography type="title" color="inherit">
              {this.state.name}
            </Typography>
          </Toolbar>
        </AppBar>
        <Paper>
          <Typography type="display1" gutterBottom>
            GroupName
          </Typography>
          <Typography type="subheading"  gutterBottom>
            Group Subheading
          </Typography>
        </Paper>


        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
            centered
          >
            <Tab label="General Info" />
            <Tab label="You owe" />
            <Tab label="Misc" />
          </Tabs>
        </AppBar>



        <Paper styles={styles.paper}>
          <Typography type="subheading" gutterBottom>
            Recent IOU's
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Payer</TableCell>
                <TableCell numeric>Amount</TableCell>
                <TableCell>Involved</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(n => {
                return (
                  <TableRow key={n.id}>
                    <TableCell>
                      {n.name}
                    </TableCell>
                    <TableCell numeric>
                      {n.amount}
                    </TableCell>
                    <TableCell numeric>
                      {n.people}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}
