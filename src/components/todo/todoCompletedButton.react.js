/* eslint max-len: 0 */
/* eslint global-require: 0 */
/* eslint no-alert: 0 */
import React from 'react';
import R from 'ramda';
import { commitMutation } from 'react-relay';
import { Button } from 'react-bootstrap';

const todoCompletedButton = ({
  environment,
  objectId,
  completed
}) => {
  if (R.equals('已完成', completed)) {
    return null;
  } else {
    return (
      <Button
        bsStyle='success'
        onClick={ () =>
          commitMutation(environment, {
            mutation: require('../../../server/graphql/model/Todo/client/__generated__/CompletedTodoMutation.graphql'),
            optimisticResponse: {
              completedTodo: {
                todo: {
                  id: objectId,
                  completed: true
                }
              }
            },
            variables: {
              objectId
            },
            onCompleted: () =>
              console.log(`Completed ${objectId} done.`),
            onError: err => console.log(err)
          }) }>
        { R.ifElse(
          R.equals('進行中'),
          R.always('完成'),
          R.always('')
        )(completed) }
      </Button>
    );
  }
};
export default todoCompletedButton;
