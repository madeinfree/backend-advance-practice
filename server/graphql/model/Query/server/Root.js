/* @flow */

import Parse from 'parse/node';
import R from 'ramda';
import {
  TodoType,
  DeleteTodoType,
  CreateTodoType
} from '../../Todo/server/Todo';
import {
  GraphQLObjectType,
  GraphQLString,
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
              resolve(
                R.map(todo =>
                  R.merge({
                    id: R.path(
                      [ 'objectId' ],
                      todo.toJSON()
                    ) /* max-len: 0 */
                  })(todo.toJSON())
                )(r)
              )
            )
            .catch(err => reject(err));
        })
    },
    todo: {
      type: TodoType,
      args: {
        objectId: {
          type: GraphQLString
        }
      },
      resolve: (obj, { objectId }) =>
        new Promise((resolve, reject) => {
          new Parse.Query('Todo')
            .get(objectId)
            .then(r => resolve(r.toJSON()))
            .catch(err => reject(err));
        })
    }
  })
});

const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    createTodo: {
      type: TodoType,
      args: {
        input: {
          type: CreateTodoType
        }
      },
      description: 'Create Todo',
      resolve: (
        value,
        { title = 'Running', content = 'School' }
      ) =>
        new Promise((resolve, reject) => {
          new Parse.Object('Todo')
            .save({
              title,
              content,
              completed: false
            })
            .then(todo =>
              resolve(
                R.merge({
                  id: R.path(
                    [ 'objectId' ],
                    todo.toJSON()
                  ) /* max-len: 0 */
                })(todo.toJSON())
              )
            )
            .catch(err => reject(err));
        })
    },
    deleteTodo: {
      type: DeleteTodoType,
      args: {
        objectId: {
          type: GraphQLString
        }
      },
      description: 'Delete Todo',
      resolve: (value, { objectId }) =>
        new Promise((resolve, reject) => {
          new Parse.Query('Todo')
            .get(objectId)
            .then(todoObj => todoObj.destroy({}))
            .then(r => resolve(r.toJSON()))
            .catch(err => reject(`delete error: ${err}`));
        })
    }
  })
});

export default new GraphQLSchema({
  query: queryType,
  mutation: mutationType
});
