import { graphql } from 'react-relay';
graphql`
  query TodosQuery {
    todos {
      objectId
      title
      content
      completed
    }
  }
`;
