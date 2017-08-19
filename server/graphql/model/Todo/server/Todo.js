import {
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean
} from 'graphql';

const TodoType = new GraphQLObjectType({
  name: 'TodoType',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    objectId: {
      type: GraphQLString
    },
    title: {
      type: GraphQLString
    },
    content: {
      type: GraphQLString
    },
    completed: {
      type: GraphQLBoolean
    }
  })
});

const CreateTodoType = new GraphQLInputObjectType({
  name: 'CreateTodoType',
  fields: () => ({
    title: {
      type: GraphQLString
    },
    content: {
      type: GraphQLString
    }
  })
});

const CompletedTodoType = new GraphQLObjectType({
  name: 'CompletedTodoType',
  fields: () => ({
    todo: {
      type: TodoType
    }
  })
});

const DeleteTodoType = new GraphQLObjectType({
  name: 'DeleteTodoType',
  fields: () => ({
    objectId: {
      type: GraphQLString
    }
  })
});

export {
  TodoType,
  DeleteTodoType,
  CompletedTodoType,
  CreateTodoType
};
