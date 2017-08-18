import { graphql } from 'react-relay';
graphql`
  query TodosQuery {
    todos {
      id
      objectId
      title
      content
      completed
    }
  }
`;
