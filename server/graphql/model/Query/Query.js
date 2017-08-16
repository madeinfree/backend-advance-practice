import Parse from 'parse/node';
import R from 'ramda';
import { TodoType } from '../../index';
import { GraphQLObjectType, GraphQLList, GraphQLSchema } from 'graphql';

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    todos: {
      type: new GraphQLList(TodoType),
      resolve: () =>
        new Promise((resolve, reject) => {
          new Parse.Query('Todo')
            .find()
            .then(r => resolve(R.map(todo => todo.toJSON())(r)))
            .catch(err => reject(err));
        })
    }
  })
});

export default new GraphQLSchema({
  query: queryType
});
