/* eslint react/jsx-indent: 0 */
import React from 'react';
import R from 'ramda';
import { Table } from 'react-bootstrap';

const queryResultNotNull = R.compose(
  R.not,
  R.isNil,
  R.path([ 'props' ])
);
const getQueryResultTodos = R.path([ 'props', 'todos' ]);
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

const Todo = ({ queryResult }) =>
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
    { queryResultNotNull(queryResult)
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
              <td>刪除</td>
            </tr>
          </tbody>
        )(getQueryResultTodos(queryResult))
      : null }
  </Table>;

export default Todo;
