import { graphql } from 'react-relay';
graphql`
  mutation DeleteTodoMutation {
    deleteTodo {
      objectId
    }
  }
`;
