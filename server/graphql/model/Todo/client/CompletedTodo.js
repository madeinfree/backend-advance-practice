import { graphql } from 'react-relay';
graphql`
  mutation CompletedTodoMutation($objectId: String) {
    completedTodo(objectId: $objectId) {
      todo {
        id
        objectId
        title
        content
        completed
      }
    }
  }
`;
