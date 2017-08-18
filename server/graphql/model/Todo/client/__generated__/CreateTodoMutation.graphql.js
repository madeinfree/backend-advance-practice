/**
 * @flow
 * @relayHash fb19472e722750fafab25e79e5903cfb
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type CreateTodoMutationVariables = {|
  input?: ?{
    title: string;
    content: string;
  };
|};

export type CreateTodoMutationResponse = {|
  +createTodo: ?{|
    +id: ?string;
    +objectId: ?string;
    +title: ?string;
    +content: ?string;
    +completed: ?boolean;
  |};
|};
*/


/*
mutation CreateTodoMutation(
  $input: TodoInputType
) {
  createTodo(input: $input) {
    id
    objectId
    title
    content
    completed
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "TodoInputType",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateTodoMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "TodoInputType"
          }
        ],
        "concreteType": "TodoType",
        "name": "createTodo",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "objectId",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "title",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "content",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "completed",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "mutationRoot"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "CreateTodoMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "TodoInputType",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "CreateTodoMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "TodoInputType"
          }
        ],
        "concreteType": "TodoType",
        "name": "createTodo",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "objectId",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "title",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "content",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "completed",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation CreateTodoMutation(\n  $input: TodoInputType\n) {\n  createTodo(input: $input) {\n    id\n    objectId\n    title\n    content\n    completed\n  }\n}\n"
};

module.exports = batch;
