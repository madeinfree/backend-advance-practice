import { graphql } from 'react-relay';
graphql`
  query TodoQuery($searchId: String) {
    todo(objectId: $searchId) {
      objectId
      title
      content
      completed
    }
  }
`;
