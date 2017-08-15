import Parse from 'parse/node';
import R from 'ramda';
const graphql = require('graphql');

const TodoType = new graphql.GraphQLObjectType({
  name: 'todo',
  fields: () => {
    return {
      id: {
        type: graphql.GraphQLID
      },
      title: {
        type: graphql.GraphQLString
      },
      content: {
        type: graphql.GraphQLString
      }
    };
  }
});

const queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: () => {
    return {
      todos: {
        type: new graphql.GraphQLList(TodoType),
        resolve: () =>
          new Promise((resolve, reject) => {
            new Parse.Query('Todo').find().then(r => resolve(R.map(todo => todo.toJSON())(r)));
          })
      }
    };
  }
});

module.exports = new graphql.GraphQLSchema({
  query: queryType
});
