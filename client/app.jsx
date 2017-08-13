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

import {
  Button,
  ButtonArea,
  CellBody,
  CellFooter,
  CellHeader,
  CellsTitle,
  Form,
  FormCell,
  Slider,
  Switch,
} from 'react-weui';


import userApi from '../messenger-api-helpers/user'

/* ----------  Internal Components  ---------- */

import WebviewControls from '../messenger-api-helpers/webview-controls';
import {dateString} from '../utils/date-string-format';

/* ----------  Models  ---------- */

/* =============================================
   =            React Application              =
   ============================================= */

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ownerName: 'test'
    };
  }


  componentWillMount() {
    if (this.props.userId !== 'demo') {
      userApi.getDetails(this.props.userId.psid ,(err, {statusCode}, body) => {
        this.setState({ownerName: body.first_name + body.last_name});
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
      <div className='app'>
        <section>
          <p>haj</p>
          <h1>{JSON.stringify(this.props.userId)}</h1>
          <CellsTitle>Date of Birth</CellsTitle>
          <Form>
            <FormCell select id='date-of-birth'>
              <CellHeader id='display-date'>
                {this.props.name}
              </CellHeader>

              <CellBody>
                <input
                  id='datepicker'
                  type='date'
                  required='required'
                />
              </CellBody>
            </FormCell>
          </Form>
        </section>
      </div>
    );
  }
}
