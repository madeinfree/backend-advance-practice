import { graphql } from 'react-relay';
graphql`
  query TodoQuery($objectId: String) {
    todo(objectId: $objectId) {
      id
      objectId
      title
      content
      completed
    }
  }
`;
