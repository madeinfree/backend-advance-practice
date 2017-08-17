import Parse from 'parse/node';
import R from 'ramda';
import {
  TodoType,
  DeleteTodoType
} from '../../Todo/server/Todo';
import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLSchema
} from 'graphql';

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    todos: {
      type: new GraphQLList(TodoType),
      resolve: () =>
        new Promise((resolve, reject) => {
          new Parse.Query('Todo')
            .find()
            .then(r =>
              resolve(R.map(todo => todo.toJSON())(r))
            )
            .catch(err => reject(err));
        })
    },
    todo: {
      type: TodoType,
      resolve: () =>
        new Promise((resolve, reject) => {
          new Parse.Query('Todo')
            .get('CEiHBX3t3p')
            .then(r => resolve(r.toJSON()))
            .catch(err => reject(err));
        })
    }
  })
});

const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    deleteTodo: {
      type: new GraphQLList(DeleteTodoType),
      description: 'Delete Todo',
      resolve: (value, { objectId }) =>
        new Promise((resolve, reject) => {
          new Parse.Query(
            'Todo'
          ).delete('Todo', objectId, (err, response) => {
            if (err) reject(err);
            resolve(response.toJSON());
          });
        })
    }
  })
});

export default new GraphQLSchema({
  query: queryType,
  mutation: mutationType
});
