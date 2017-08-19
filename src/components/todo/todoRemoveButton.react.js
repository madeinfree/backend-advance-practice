/* eslint max-len: 0 */
/* eslint global-require: 0 */
/* eslint no-alert: 0 */
import React from 'react';
import { withStateHandlers } from 'recompose';
import R from 'ramda';
import styled from 'styled-components';
import { commitMutation } from 'react-relay';
import { Button } from 'react-bootstrap';
import SweetAlert from '../common/sweet/sweet-alert.react';
const getObjectId = R.path([ 'objectId' ]);

const SpanLayout = styled.span``;

const TodoRemoveButton = ({
  environment,
  todo,
  alertShow,
  handleClearSearchText,
  handleAlertShow
}) =>
  <SpanLayout>
    { alertShow
      ? <SweetAlert
        options={ { text: getObjectId(todo) } }
        handleCancel={ handleAlertShow }
        handleDelete={ () =>
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
            }) } />
      : null }
    <Button
      onClick={ () => {
        handleAlertShow();
      } }>
      刪除
    </Button>
  </SpanLayout>;

export default withStateHandlers(
  ({ alertShow = false }) => ({
    alertShow
  }),
  {
    handleAlertShow: ({ alertShow }) => () => ({
      alertShow: R.compose(
        R.ifElse(
          R.equals(true),
          R.always(false),
          R.always(true)
        )
      )(alertShow)
    })
  }
)(TodoRemoveButton);
