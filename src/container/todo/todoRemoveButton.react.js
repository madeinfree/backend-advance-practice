/* eslint max-len: 0 */
/* eslint global-require: 0 */
import React from 'react';
import R from 'ramda';
import { commitMutation } from 'react-relay';
import { Button } from 'react-bootstrap';
const getObjectId = R.path([ 'objectId' ]);

const TodoRemoveButton = ({
  environment,
  todo,
  handleClearSearchText
}) =>
  <Button
    onClick={ () =>
      commitMutation(environment, {
        mutation: require('../../../server/graphql/model/Todo/client/__generated__/DeleteTodoMutation.graphql'),
        configs: [
          {
            type: 'NODE_DELETE',
            deletedIDFieldName: 'objectId'
          }
        ],
        variables: {
          objectId: getObjectId(todo)
        },
        onCompleted: () => handleClearSearchText(),
        onError: err => console.log(err)
      }) }>
    刪除
  </Button>;

export default TodoRemoveButton;
