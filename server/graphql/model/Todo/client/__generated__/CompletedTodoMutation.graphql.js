/**
 * @flow
 * @relayHash 4918b4cdcb6c680491d8eb48dd36db3c
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type CompletedTodoMutationVariables = {|
  objectId?: ?string;
|};

export type CompletedTodoMutationResponse = {|
  +completedTodo: ?{|
    +todo: ?{|
      +id: ?string;
      +objectId: ?string;
      +title: ?string;
      +content: ?string;
      +completed: ?boolean;
    |};
  |};
|};
*/


/*
mutation CompletedTodoMutation(
  $objectId: String
) {
  completedTodo(objectId: $objectId) {
    todo {
      id
      objectId
      title
      content
      completed
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "objectId",
        "type": "String",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CompletedTodoMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "objectId",
            "variableName": "objectId",
            "type": "String"
          }
        ],
        "concreteType": "CompletedTodoType",
        "name": "completedTodo",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "TodoType",
            "name": "todo",
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
        "storageKey": null
      }
    ],
    "type": "mutationRoot"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "CompletedTodoMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "objectId",
        "type": "String",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "CompletedTodoMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "objectId",
            "variableName": "objectId",
            "type": "String"
          }
        ],
        "concreteType": "CompletedTodoType",
        "name": "completedTodo",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "TodoType",
            "name": "todo",
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
        "storageKey": null
      }
    ]
  },
  "text": "mutation CompletedTodoMutation(\n  $objectId: String\n) {\n  completedTodo(objectId: $objectId) {\n    todo {\n      id\n      objectId\n      title\n      content\n      completed\n    }\n  }\n}\n"
};

module.exports = batch;
