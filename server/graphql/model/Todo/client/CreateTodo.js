import { graphql } from 'react-relay'
graphql`
  mutation CreateTodoMutation($input: TodoInputType) {
    createTodo(input: $input) {
      id
      objectId
      title
      content
      completed
    }
  }
`