import { graphql } from 'react-relay';
graphql`
  query TodoQuery {
    todos {
      objectId
      title
      content
      completed
    }
  }
`;
