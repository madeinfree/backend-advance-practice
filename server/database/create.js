import Parse from 'parse/node';
require('dotenv').config();

Parse.initialize(
  process.env.PARSE_SERVER_APP_ID,
  process.env.PARSE_SERVER_JAVASCRIPT_KEY,
  process.env.PARSE_SERVER_MASTER_KEY
);
Parse.serverURL = process.env.PARSE_SERVER_URL;

new Parse.Object('Todo')
  .save({
    title: 'Watch',
    content: 'Video',
    completed: false
  })
  .then(res => console.log(res));
