import Parse from 'parse/node';
require('dotenv').config();

Parse.initialize(process.env.PARSE_SERVER_APP_ID, process.env.PARSE_SERVER_JAVASCRIPT_KEY, process.env.PARSE_SERVER_MASTER_KEY);
Parse.serverURL = process.env.PARSE_SERVER_URL;

new Parse.Query('Todo').find().then(r => console.log(r));

// new Parse.Object('Todo')
//   .save({
//     title: 'Reading-2',
//     content: 'Ramda'
//   })
//   .then(res => console.log(res));
