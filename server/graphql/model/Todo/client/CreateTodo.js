import { graphql } from 'react-relay';
graphql`
  mutation CreateTodoMutation($input: CreateTodoType) {
    createTodo(input: $input) {
      id
      objectId
      title
      content
      completed
    }
  }
`;
