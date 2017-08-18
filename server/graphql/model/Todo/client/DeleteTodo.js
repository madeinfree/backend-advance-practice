import { graphql } from 'react-relay';
graphql`
  mutation DeleteTodoMutation($objectId: String) {
    deleteTodo(objectId: $objectId) {
      objectId
    }
  }
`;
