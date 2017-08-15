/**
 * Created by victorode on 2017-08-13.
 */
/**
 * Copyright 2017-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable camelcase */

// ===== MODULES ===============================================================
import request from 'request';

const fakeUsers = [{
  fb_id: '1',
  first_name: 'Ludwig',
  profile_pic: 'http://uago.at/-xu6k/sgim.jpg',
}, {
  fb_id: '2',
  first_name: 'Wolfgang',
  profile_pic: 'http://uago.at/-wmjk/sgim.jpg',
}, {
  fb_id: '3',
  first_name: 'Gabriel',
  profile_pic: 'http://uago.at/-eRAu/sgim.jpg',
}, {
  fb_id: '4',
  first_name: 'Giuseppe',
  profile_pic: 'http://uago.at/-Pcyd/sgim.jpg',
}];

const fakeGetDetails = (userId, callback) => {
  console.log('DEMO DETAILS');
  const user = fakeUsers.find((fakeUser) => fakeUser.fb_id === userId);
  callback(
    null,
    {
      statusCode: 200,
      ok: true,
    },
    user
  );
};

const getDetailsFromFacebook = (userId, callback) => {
  request(
    {
      method: 'GET',
      url: `https://graph.facebook.com/v2.6/${userId}`,
      json: true,
      qs: {
        access_token: "EAAE7ZAXt1fwkBAJM6Jz7gZBDQfvDi9ggyEsFjpVsfZAba6BYOuYIZBDfUG2IT3uQNS0zWEKfHS1nzDvdyMm1iXZAFznDhAC3ZCbvrZAYQCBXo0hMokc54eg0hA3d71fpjzeOjfdRaX5w9oEHvWQZCBoinTSnN3qiBsdJLqUaKbPjNAZDZD",
        // facebook requires the qs in the format
        // fields=a,b,c not fields=[a,b,c]
        // process.env.PAGE_ACCESS_TOKEN
        fields: 'first_name,last_name,profile_pic',
      },
    },
    callback
  );
};

export default {
  getDetails: process.env.DEMO ? fakeGetDetails : getDetailsFromFacebook,
};
