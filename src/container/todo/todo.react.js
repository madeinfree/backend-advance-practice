/* eslint react/jsx-indent: 0 */
/* eslint max-len: 0 */
/* eslint no-nested-ternary: 0 */
/* eslint global-require: 0 */
import React from 'react';
import R from 'ramda';
import { Table, FormControl } from 'react-bootstrap';
import { compose, withStateHandlers } from 'recompose';
import { QueryRenderer } from 'react-relay';

import TodoRemoveButton from './todoRemoveButton.react';

const queryResultNotNull = R.compose(
  R.not,
  R.isNil,
  R.path([ 'props' ])
);
const getQueryResultTodos = R.compose(
  R.filter(todo => todo),
  R.path([ 'props', 'todos' ])
);
const getQueryResultTodo = R.path([ 'props', 'todo' ]);
const getObjectId = R.path([ 'objectId' ]);
const getTitle = R.path([ 'title' ]);
const getContent = R.path([ 'content' ]);
const getCompleted = R.compose(
  R.ifElse(
    R.equals(true),
    R.always('已完成'),
    R.always('進行中')
  ),
  R.path([ 'completed' ])
);

const SingleTableBody = (
  {
    queryResult,
    environment,
    handleClearSearchText
  } /* eslint no-confusing-arrow: 0 */
) =>
  queryResultNotNull(queryResult)
    ? <tbody
      key={ getObjectId(getQueryResultTodo(queryResult)) }>
        <tr>
          <td>
            { getObjectId(getQueryResultTodo(queryResult)) }
          </td>
          <td>
            { getTitle(getQueryResultTodo(queryResult)) }
          </td>
          <td>
            { getContent(getQueryResultTodo(queryResult)) }
          </td>
          <td>
            { getCompleted(getQueryResultTodo(queryResult)) }
          </td>
          <td>
            <TodoRemoveButton
              environment={ environment }
              handleClearSearchText={ handleClearSearchText }
              todo={ getQueryResultTodo(queryResult) } />
          </td>
        </tr>
      </tbody>
    : null;

const Todo = ({
  queryResult,
  changeSearchText,
  clearSearchText,
  searchText,
  environment
}) =>
  <div>
    <FormControl
      type='text'
      value={ searchText }
      placeholder='Search...'
      onChange={ changeSearchText } />
    <br />
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>編號</th>
          <th>項目</th>
          <th>內容</th>
          <th>完成度</th>
          <th>操作</th>
        </tr>
      </thead>
      { searchText !== ''
        ? <QueryRenderer
          environment={ environment }
          query={ require('../../../server/graphql/model/Todo/client/__generated__/TodoQuery.graphql') }
          variables={ {
            objectId: searchText
          } }
          render={ todo =>
              <SingleTableBody
                queryResult={ todo }
                environment={ environment }
                handleClearSearchText={ clearSearchText } /> } />
        : queryResultNotNull(queryResult)
          ? R.map(todo =>
              <tbody key={ getObjectId(todo) }>
                <tr>
                  <td>
                    { getObjectId(todo) }
                  </td>
                  <td>
                    { getTitle(todo) }
                  </td>
                  <td>
                    { getContent(todo) }
                  </td>
                  <td>
                    { getCompleted(todo) }
                  </td>
                  <td>
                    <TodoRemoveButton
                      environment={ environment }
                      handleClearSearchText={
                        clearSearchText
                      }
                      todo={ todo } />
                    { R.ifElse(
                      R.equals('進行中'),
                      R.always('完成'),
                      R.always('')
                    )(getCompleted(todo)) }
                  </td>
                </tr>
              </tbody>
            )(getQueryResultTodos(queryResult))
          : null }
    </Table>
  </div>;
export default compose(
  withStateHandlers(
    ({ searchText = '' }) => ({ searchText }),
    {
      changeSearchText: () => e => ({
        searchText: e.target.value
      }),
      clearSearchText: () => () => ({ searchText: '' })
    }
  )
)(Todo);
