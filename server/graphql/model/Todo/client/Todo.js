import { graphql } from 'react-relay';
graphql`
  query TodoQuery($objectId: String) {
    todo(objectId: $objectId) {
      objectId
      title
      content
      completed
    }
  }
`;
