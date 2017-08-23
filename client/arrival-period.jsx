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
import 'whatwg-fetch';

/* ----------  External UI Kit  ---------- */

import Button from 'material-ui/Button';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';


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
    paddingTop: 200,
  },
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'test',
      open: false,
      tid: "demo"
    };
  }

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  handleClick = () => {
    this.setState({
      open: true
    });
  };

  componentWillMount() {
    if (this.props.userId !== 'demo') {
      userApi.getDetails(this.props.userId.psid ,(err, {statusCode}, body) => {
        console.log(body);
        this.setState(
          {name: body.first_name + body.last_name,
            tid: this.props.userId.tid
          }
        );
      });
    }
  }



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
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>{this.state.tid}</DialogTitle>
          <DialogContent>
            <DialogContentText>1-2-3-4-5</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleRequestClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>

        <Typography type="display1" gutterBottom>
          Hi {this.state.name}
        </Typography>
        <Typography type="subheading" gutterBottom>
          example subheading
        </Typography>
        <Button raised color="accent" onClick={this.handleClick}>
          Whats my tid
        </Button>
      </div>
    );
  }
}
